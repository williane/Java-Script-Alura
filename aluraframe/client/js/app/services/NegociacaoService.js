'use strict';

System.register(['./HttpService.js', './ConnectionFactory.js', '../dao/NegociacaoDao.js', '../models/Negociacao.js'], function (_export, _context) {
    "use strict";

    var HttpService, ConnectionFactory, NegociacaoDao, Negociacao, _createClass, NegociacaoService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_HttpServiceJs) {
            HttpService = _HttpServiceJs.HttpService;
        }, function (_ConnectionFactoryJs) {
            ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
        }, function (_daoNegociacaoDaoJs) {
            NegociacaoDao = _daoNegociacaoDaoJs.NegociacaoDao;
        }, function (_modelsNegociacaoJs) {
            Negociacao = _modelsNegociacaoJs.Negociacao;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('NegociacaoService', NegociacaoService = function () {
                function NegociacaoService() {
                    _classCallCheck(this, NegociacaoService);

                    this._http = new HttpService();
                }

                _createClass(NegociacaoService, [{
                    key: 'obterNegociacoesDaSemana',
                    value: function obterNegociacoesDaSemana() {
                        return this._http.get('negociacoes/semana').then(function (negociacoes) {
                            return negociacoes.map(function (objeto) {
                                return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                            });
                        }).catch(function (erro) {
                            throw new Error(erro);
                        });
                    }
                }, {
                    key: 'obterNegociacoesDaSemanaAnterior',
                    value: function obterNegociacoesDaSemanaAnterior() {
                        return this._http.get('negociacoes/anterior').then(function (negociacoes) {
                            return negociacoes.map(function (objeto) {
                                return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                            });
                        }).catch(function (erro) {
                            throw new Error(erro);
                        });
                    }
                }, {
                    key: 'obterNegociacoesDaSemanaRetrasada',
                    value: function obterNegociacoesDaSemanaRetrasada() {
                        return this._http.get('negociacoes/retrasada').then(function (negociacoes) {
                            return negociacoes.map(function (objeto) {
                                return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                            });
                        }).catch(function (erro) {
                            throw new Error(erro);
                        });
                    }
                }, {
                    key: 'obterNegociacoes',
                    value: function obterNegociacoes() {
                        return Promise.all([this.obterNegociacoesDaSemana(), this.obterNegociacoesDaSemanaAnterior(), this.obterNegociacoesDaSemanaRetrasada()]).then(function (periodos) {

                            var negociacoes = periodos.reduce(function (dados, periodo) {
                                return dados.concat(periodo);
                            }, []);

                            return negociacoes;
                        }).catch(function (erro) {
                            throw new Error(erro);
                        });
                    }
                }, {
                    key: 'cadastra',
                    value: function cadastra(negociacao) {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new NegociacaoDao(connection);
                        }).then(function (dao) {
                            return dao.adiciona(negociacao);
                        }).then(function () {
                            return 'Negociação adicionada com sucesso';
                        }).catch(function (error) {
                            throw new Error(error);
                        });
                    }
                }, {
                    key: 'lista',
                    value: function lista() {

                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new NegociacaoDao(connection);
                        }).then(function (dao) {
                            return dao.listaTodos();
                        });
                    }
                }, {
                    key: 'apaga',
                    value: function apaga() {

                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new NegociacaoDao(connection);
                        }).then(function (dao) {
                            return dao.apagaTodos();
                        }).then(function () {
                            return 'Negociações apagadas com sucesso';
                        }).catch(function (erro) {
                            throw new Error(erro);
                        });
                    }
                }, {
                    key: 'importa',
                    value: function importa(listaAtual) {

                        return this.obterNegociacoes().then(function (negociacoes) {
                            return negociacoes.filter(function (negociacao) {
                                return !listaAtual.some(function (negociacaoExistente) {
                                    return negociacao.isEquals(negociacaoExistente);
                                });
                            });
                        }).catch(function (erro) {
                            throw new Error(erro);
                        });
                    }
                }]);

                return NegociacaoService;
            }());

            _export('NegociacaoService', NegociacaoService);
        }
    };
});
//# sourceMappingURL=NegociacaoService.js.map