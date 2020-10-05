import { Negociacao } from '../models/Negociacao.js';

export class NegociacaoDao {

    constructor(connection) {
        this._connection = connection;
        this._store = 'negociacoes';
    }

    adiciona(negociacao) {
        return new Promise((resolve, reject) => {
            let request = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).add(negociacao);

            request.onsuccess = (e) => {
                console.log('negociação incluida com sucesso');
                resolve();
            }

            request.onerror = (e) => {
                console.log(e.target.error);
                reject(e.target.error.name);
            }
        });
    }

    listaTodos() {
        return new Promise((resolve, reject) => {
            let cursor = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).openCursor();

            let negociacoes = [];

            cursor.onsuccess = (e) => {
                let atual = e.target.result;

                if (atual) {
                    let dado = atual.value;
                    negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor));

                    atual.continue();
                } else {
                    resolve(negociacoes);
                }
            }

            cursor.onerror = (e) => {
                reject(e.target.error.name);
            }
        });
    }

    apagaTodos(){
        return new Promise((resolve, reject) => {
            let request = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).clear();

            request.onsuccess = (e) => resolve('Negociações removidas com sucesso');

            request.onerror = (e) => {
                console.log(e.target.error);
                reject(e.target.error.name);
            }
        });
    }

}