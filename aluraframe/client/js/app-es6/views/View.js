export class View{
    constructor(elemento) {
        this._elemento = elemento;
      }
    
      _template(model) {
          throw new Error ('O método template deve ser sobescrito!');
      }
    
      update(model) {
        this._elemento.innerHTML = this._template(model);
      }
}