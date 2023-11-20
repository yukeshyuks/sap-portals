sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";
		var usg_deci;
		var select;
		return Controller.extend("qualityportalQualityPortal.controller.UsageDecision", {
			onInit: function () {

				var service = "/sap/opu/odata/sap/Z_YUKS_ODATA_SF_SRV/";

				var oModel = new sap.ui.model.odata.ODataModel(service, true);

				var uri = "Z_YUKS_ODATA_SFSet?$filter=Plant eq ''";



				oModel.read(uri, {

					context: null,

					urlParameters: null,

					async: false,

					success: function (oData, oResponse) {

						// window.console.log(oData);

						usg_deci = oData.results;

					}

				});

				// var ooModel = new JSONModel(usg_deci);

				var ooModel = new sap.ui.model.json.JSONModel(usg_deci);

				this.getView().setModel(ooModel, "ud_list");

				this.mGroupFunctions = {

					Price: function (oContext) {

						var type = oContext.getProperty("ud_list>UdStatus");

						var key, text;

						if (type === "ACCEPTED") {

							key = "ACCEPTED";

							text = "ACCEPTED";

						} else if (type === "REJECTED") {

							key = "REJECTED";

							text = "REJECTED";

						} else if (type === "NOT VALIDATED") {

							key = "NOT VALIDATED";

							text = "NOT VALIDATED";

						}

						return {

							key: key,

							text: text

						};

					}

				};

			},

			formatRowHighlight: function (data) {

				if (data === 'ACCEPTED' || data === 'A') {

					return sap.ui.core.ValueState.Success;

				} else if (data === 'REJECTED' || data === 'R') {

					return sap.ui.core.ValueState.Error;

				} else {

					return sap.ui.core.ValueState.Warning;

				}

			},

			onSearch: function (oEvt) {

				var aFilters = [];

				var sQuery = oEvt.getSource().getValue();

				window.console.log(sQuery);

				if (sQuery && sQuery.length > 0) {

					var filter = new Filter("Insplot", FilterOperator.Contains, sQuery);

					aFilters.push(filter);

				}

				// update list binding

				var list = this.getView().byId("usgdecitable");

				var binding = list.getBinding("items");

				binding.filter(aFilters, "Application");

			},



			_getDialog2: function () {

				if (!this._oDialog2) {

					this._oDialog2 = sap.ui.xmlfragment("qualityportalQualityPortal.view.Fragments.UsageDecision", this);

					this.getView().addDependent(this._oDialog2);

				}

				return this._oDialog2;

			},

			displaydetails_ud: function (oEvent) {

				this._getDialog2().open();

				var objcurrent2 = oEvent.getSource().getSelectedContexts()[0].getObject();

				select = objcurrent2.Insplot;

				if (objcurrent2.UdStatus === "NOT VALIDATED") {

					$(".display-btn").css({

						"display": "flex"

					});

				} else {

					$(".display-btn").css({

						"display": "none"

					});

				}

				var mat = new sap.ui.model.json.JSONModel(objcurrent2);

				this._oDialog2.setModel(mat);

			},

			onClose: function () {

				this._getDialog2().close();

			},

			ongoto: function () {

				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

				oRouter.navTo("Dashboard");

			},

			onPressAccept: function (oEvent) {

				$(".change-text").text("ACCEPTED").css({

					"color": "#0c7a0c"

				});

				var data = usg_deci.slice(0);

				window.console.log(data);

				for (var i = 0; i < data.length; i++) {

					if (select === data[i]["Insplot"]) {

						window.console.log(select, data[i]["Insplot"]);

						usg_deci[i]["UdStatus"] = "ACCEPTED";

					}

				}

				var ooModel = new JSONModel(usg_deci);

				this.getView().setModel(ooModel, "ud_list");

				this._getDialog2().close();

			},

			onPressReject: function () {

				$(".change-text").text("REJECTED").css({

					"color": "#bb0000"

				});

				var data = usg_deci.slice(0);

				for (var i = 0; i < data.length; i++) {

					if (select === data[i]["Insplot"]) {

						window.console.log(select, data[i]["Insplot"]);

						usg_deci[i]["UdStatus"] = "REJECTED";

					}

				}

				var ooModel = new JSONModel(usg_deci);

				this.getView().setModel(ooModel, "ud_list");

				this._getDialog2().close();

			},





		});



	});