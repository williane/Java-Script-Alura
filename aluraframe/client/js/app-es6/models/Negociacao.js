export class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this); //Congela o objeto depois de instanciado, não deixa alterar as propriedades
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

  get volume() {
    return this.quantidade * this.valor;
  }

  isEquals(outraNegociacao){
    return JSON.stringify(this) == JSON.stringify(outraNegociacao);
  }
}
