import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroContas = 0;
    //#saldo private field nova convenção ainda não aprovada
    constructor(agencia, cliente) {
        super(0, cliente, agencia);
        ContaCorrente.numeroContas += 1;
    }
}