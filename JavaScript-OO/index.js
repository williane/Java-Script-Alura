import { Client } from './Client.js';
import { ContaCorrente } from './ContaCorrente.js';

const client1 = new Client();
const conta1 = new ContaCorrente();

const client2 = new Client();
const conta2 = new ContaCorrente();

client1.nome = 'Ricardo';
client1.cpf = 11122233300;

conta1.agencia = 1001;
conta1.cliente = client1;

client2.nome = 'alice';
client2.cpf = 88899977700;

conta2.agencia = 1002;
conta2.cliente = client2;


conta1.depositar(200);
conta2.depositar(200);

conta2.transferir(100, conta1);

console.log(conta1, conta2);