export class ContaCorrente {
    agencia;
    cliente;

    //#saldo private field nova convenção ainda não aprovada
    _saldo = 0;

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