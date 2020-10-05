'use strict';

System.register(['../models/ListaNegociacoes.js', '../models/Mensagem.js', '../views/NegociacoesView.js', '../views/MensagemView.js', '../services/NegociacaoService.js', '../helpers/DateHelper.js', '../helpers/Bind.js', '../models/Negociacao.js'], function (_export, _context) {
  "use strict";

  var ListaNegociacoes, Mensagem, NegociacoesView, MensagemView, NegociacaoService, DateHelper, Bind, Negociacao, _createClass, NegociacaoController;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_modelsListaNegociacoesJs) {
      ListaNegociacoes = _modelsListaNegociacoesJs.ListaNegociacoes;
    }, function (_modelsMensagemJs) {
      Mensagem = _modelsMensagemJs.Mensagem;
    }, function (_viewsNegociacoesViewJs) {
      NegociacoesView = _viewsNegociacoesViewJs.NegociacoesView;
    }, function (_viewsMensagemViewJs) {
      MensagemView = _viewsMensagemViewJs.MensagemView;
    }, function (_servicesNegociacaoServiceJs) {
      NegociacaoService = _servicesNegociacaoServiceJs.NegociacaoService;
    }, function (_helpersDateHelperJs) {
      DateHelper = _helpersDateHelperJs.DateHelper;
    }, function (_helpersBindJs) {
      Bind = _helpersBindJs.Bind;
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

      _export('NegociacaoController', NegociacaoController = function () {
        function NegociacaoController() {
          _classCallCheck(this, NegociacaoController);

          var $ = document.querySelector.bind(document);
          this._inputData = $("#data");
          this._inputQuantidade = $("#quantidade");
          this._inputValor = $("#valor");
          this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia', 'ordena', 'invertOrdem');
          this._mensagem = new Bind(new Mensagem(), new mensagemView($('#mensagemView')), 'texto');
          this._ordemAtual = '';
          this._service = new NegociacaoService();
          this._init();
        }

        _createClass(NegociacaoController, [{
          key: '_init',
          value: function _init() {
            var _this = this;

            this._service.lista().then(function (negociacoes) {
              return negociacoes.forEach(function (negociacao) {
                return _this._listaNegociacoes.adiciona(negociacao);
              });
            }).catch(function (erro) {
              _this._mensagem.texto = erro;
            });

            setInterval(function () {
              _this.importaNegociacoes();
            }, 3000);
          }
        }, {
          key: 'adiciona',
          value: function adiciona(event) {
            var _this2 = this;

            event.preventDefault();
            var negociacao = this._criaNegociacao();

            this._service.cadastra(negociacao).then(function (mensagem) {
              _this2._listaNegociacoes.adiciona(negociacao);
              _this2._mensagem.texto = mensagem;
              _this2._limpaFormulario();
            }).catch(function (error) {
              return _this2._mensagem.texto = error;
            });
          }
        }, {
          key: 'importaNegociacoes',
          value: function importaNegociacoes() {
            var _this3 = this;

            this._service.importa(this._listaNegociacoes.negociacoes).then(function (negociacoes) {
              return negociacoes.forEach(function (negociacao) {
                _this3._listaNegociacoes.adiciona(negociacao);
                // this._mensagem.texto = 'Negociações do período importadas'
              });
            }).catch(function (erro) {
              return _this3._mensagem.texto = erro;
            });
          }
        }, {
          key: 'apaga',
          value: function apaga() {
            var _this4 = this;

            this._service.apaga().then(function (mensagem) {
              _this4._mensagem.texto = mensagem;
              _this4._listaNegociacoes.esvazia();
            }).catch(function (erro) {
              return _this4._mensagem.texto = erro;
            });
          }
        }, {
          key: '_criaNegociacao',
          value: function _criaNegociacao(tipo) {
            if (tipo) {
              return {
                data: this._inputData.value,
                quantidade: this._inputQuantidade.value,
                valor: this._inputValor.value
              };
            }
            return new Negociacao(DateHelper.textoParadata(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
          }
        }, {
          key: '_limpaFormulario',
          value: function _limpaFormulario() {
            this._inputData.value = "";
            this._inputQuantidade.value = 1;
            this._inputValor.value = 0.0;

            this._inputData.focus();
          }
        }, {
          key: 'ordena',
          value: function ordena(coluna) {
            if (this._ordemAtual == coluna) {
              this._listaNegociacoes.invertOrdem();
            } else {
              this._listaNegociacoes.ordena(function (a, b) {
                return a[coluna] - b[coluna];
              });
            }
            this._ordemAtual = coluna;
          }
        }]);

        return NegociacaoController;
      }());

      _export('NegociacaoController', NegociacaoController);
    }
  };
});
//# sourceMappingURL=NegociacaoController.js.map