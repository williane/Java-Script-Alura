import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroContas = 0;
    //#saldo private field nova convenção ainda não aprovada
    constructor(agencia, cliente) {
        super(0, cliente, agencia);
        ContaCorrente.numeroContas += 1;
    }

    sacar(valor) {
        let taxa = 1.1;
        const valorSacado = taxa * valor;
        const temSaldo = this._saldo >= valorSacado;
        // temSaldo ? this._saldo -= valor : console.log('saldo insuficiente');
        if (temSaldo) {
            this._saldo -= valorSacado;
            return valor;
        } else {
            return 0;
        }
    }
}