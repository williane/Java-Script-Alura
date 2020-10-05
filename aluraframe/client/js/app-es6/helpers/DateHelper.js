export class DateHelper {
  constructor() {
    throw new Error("A classe DateHelper não deve ser instanciada");
  }

  static textoParadata(texto) {
    if (!/^\d{4}[-/.]\d{1,2}[-/.]\d{1,2}$/.test(texto)) {
      throw new Error("o formato de data está inválido!");
    }

    return new Date(
      //... spread desmembra o array
      ...texto
        .split(/[-/.]/)
        .map((item, indice) => (indice == 1 ? item - 1 : item))
    );
  }

  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }
}
