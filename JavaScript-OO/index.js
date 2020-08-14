import { Client } from './Client.js';
import { ContaCorrente } from './ContaCorrente.js';

const client1 = new Client('Ricardo', 11122233300);
const conta1 = new ContaCorrente(1001, client1);

const client2 = new Client('alice', 88899977700);
const conta2 = new ContaCorrente(1002, client2);

conta1.depositar(200);
conta2.depositar(200);

conta2.transferir(100, conta1);

console.log(conta2);
console.log(ContaCorrente.numeroContas);