import { Client } from './Client.js';
import { ContaCorrente } from './ContaCorrente.js';

const client1 = new Client('Ricardo', 11122233300);
const conta1 = new ContaCorrente(1001, client1);

conta1.depositar(200);
conta1.sacar(100);

console.log(conta1);