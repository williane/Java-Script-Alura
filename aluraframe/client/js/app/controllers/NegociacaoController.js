class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }
  adiciona(event) {
    event.preventDefault();

    //... spreadsheet desmembra o array
    // let data = new Date(...this._inputData.value.split("-").map((item, indice) => indice == 2 ? item - 1 : item}));

    let negociacao = new Negociacao(
      new Date(this._inputData.value.split('-')),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao);
  }
}
