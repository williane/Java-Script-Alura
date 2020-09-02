class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia', 'ordena', 'invertOrdem');
    this._mensagem = new Bind(new Mensagem(), new mensagemView($('#mensagemView')), 'texto');
    this._ordemAtual = '';
  }

  adiciona(event) {
    event.preventDefault();

    ConnectionFactory.getConnection().then(connection => {
      let negociacao = this._criaNegociacao();
      new NegociacaoDao(connection).adiciona(negociacao).then(() => {        
        new HttpService().post('/negociacoes', this._criaNegociacao('objeto')).then(() => {
          this._listaNegociacoes.adiciona(this._criaNegociacao());
          this._mensagem.texto = 'Negociacao adicionada com sucesso!'
          this._limpaFormulario();
        }).catch(error => this._mensagem.texto = error);

      }).catch(error => this._mensagem.texto = error);
    });
  }

  importaNegociacoes() {
    let service = new NegociacaoService();

    service.obterNegociacoes()
      .then(negociacoes => {
        negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        this._mensagem.texto = 'Negociações obtidas com sucesso!';
      }).catch(erro => this._mensagem.texto = erro);
  }

  apaga() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = 'Negociações apagadas com sucesso!';
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
