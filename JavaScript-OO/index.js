import { Client } from './Client.js';
import { Diretor } from './funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Ricardo', 10000, 12312312300);
diretor.cadastrarSenha('123123');

const logado = SistemaAutenticacao.login(diretor, '123123');

console.log(logado);