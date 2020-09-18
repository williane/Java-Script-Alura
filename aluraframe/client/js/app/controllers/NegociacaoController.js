class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia', 'ordena', 'invertOrdem');
    this._mensagem = new Bind(new Mensagem(), new mensagemView($('#mensagemView')), 'texto');
    this._ordemAtual = '';
    this._service = new NegociacaoService();
    this._init();
  }

  _init() {
    this._service
        .lista()
        .then(negociacoes =>
            negociacoes.forEach(negociacao =>
                this._listaNegociacoes.adiciona(negociacao)))
        .catch(erro => {
            this._mensagem.texto = erro;
        });

    setInterval(() => {
      this.importaNegociacoes();
    }, 3000);

  }

  adiciona(event) {
    event.preventDefault();
    let negociacao = this._criaNegociacao();

    this._service
      .cadastra(negociacao)
      .then(mensagem => {
        this._listaNegociacoes.adiciona(negociacao);
        this._mensagem.texto = mensagem;
        this._limpaFormulario();
      })
      .catch(error => this._mensagem.texto = error);


  }

  importaNegociacoes() {
    let service = this._service;

    service.obterNegociacoes()
      .then(negociacoes => negociacoes.filter(negociacao =>
        !this._listaNegociacoes.negociacoes.some(negociacaoExistente => JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente))))
      .then(negociacoes => {
        negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        // this._mensagem.texto = 'Negociações obtidas com sucesso!';
      }).catch(erro => this._mensagem.texto = erro);
  }

  apaga() {
    this._service
    .apaga()
    .then(mensagem => {
        this._mensagem.texto = mensagem;
        this._listaNegociacoes.esvazia();
    })
    .catch(erro => this._mensagem.texto = erro);
  }

  _criaNegociacao(tipo) {
    if (tipo) {
      return {
        data: this._inputData.value,
        quantidade: this._inputQuantidade.value,
        valor: this._inputValor.value
      }
    }
    return new Negociacao(
      DateHelper.textoParadata(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }

  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }

  ordena(coluna) {
    if (this._ordemAtual == coluna) {
      this._listaNegociacoes.invertOrdem();
    } else {
      this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
    }
    this._ordemAtual = coluna;
  }
}
