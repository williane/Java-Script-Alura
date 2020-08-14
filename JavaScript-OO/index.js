class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        const temSaldo = this._saldo >= valor;
        // temSaldo ? this._saldo -= valor : console.log('saldo insuficiente');
        if (temSaldo) {
            this._saldo -= valor;
            return `Valor sacado: ${valor} saldo total de ${this._saldo}`;
        } else {
            return 'Saldo insuficiente'
        }
    }

    depositar(valor) {
        const ehPositivo = valor > 0;
        ehPositivo ? this._saldo += valor : console.log('valor não pode ser negativo');
    }
}

class Client {
    nome;
    cpf;
    contaCorrente = new ContaCorrente();
}


const client1 = new Client();

client1.nome = 'Ricardo';
client1.cpf = 11122233300;
client1.contaCorrente.agencia = 1001;

client1.contaCorrente.depositar(200);
const valorSacado = client1.contaCorrente.sacar(300);

console.log(valorSacado);