class Negociacao {
    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //Congela o objeto depois de instanciado, não deixa alterar as propriedades
    }

    get data(){
        return this._data;
    }

    get quantidade (){
        return this._quantidade;
    }

    get valor (){
        return this._valor;
    }

    get volume(){
        return this.quantidade * this.valor;
    }
}