import { Client } from "./Client.js";

export class ContaCorrente {
    static numeroContas = 0;
    //#saldo private field nova convenção ainda não aprovada

    set cliente(client) {
        if (client instanceof Client) {

            this._cliente = client;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroContas += 1;
    }

    sacar(valor) {
        const temSaldo = this._saldo >= valor;
        // temSaldo ? this._saldo -= valor : console.log('saldo insuficiente');
        if (temSaldo) {
            this._saldo -= valor;
            return valor;
        } else {
            return 'Saldo insuficiente'
        }
    }

    depositar(valor) {
        const ehPositivo = valor > 0;
        ehPositivo ? this._saldo += valor : console.log('valor não pode ser negativo');
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        valorSacado > 0 ? conta.depositar(valorSacado) : console.log('não foi possivel transferir');
    }
}