class DateHelper {
  constructor() {
    throw new Error('A classe DateHelper não deve ser instanciada');
  }

  static textoParadata(texto) {
    return new Date(
      //... spread desmembra o array
      ...texto.split("-").map((item, indice) => (indice == 1 ? item - 1 : item))
    );
  }

  static dataParaTexto(data) {
    return (
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
    );
  }
}
