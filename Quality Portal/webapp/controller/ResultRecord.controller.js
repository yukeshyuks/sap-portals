sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        return Controller.extend("qualityportalQualityPortal.controller.ResultRecord", {

            onInit: function () {

                var service = "/sap/opu/odata/sap/Z_YUKS_ODATA_SF_RESULT/";

                var oModel = new sap.ui.model.odata.ODataModel(service, true);

                var uri = "Z_YUKS_ODATA_SF_RESULTSet?$filter=Plant eq ''";

                var res_rec;

                oModel.read(uri, {

                    context: null,

                    urlParameters: null,

                    async: false,

                    success: function (oData, _oResponse) {

                        // window.console.log(oData);

                        res_rec = oData.results;

                    }

                });

                // var ooModel = new JSONModel(res_rec);

                var ooModel = new sap.ui.model.json.JSONModel(res_rec);

                this.getView().setModel(ooModel, "rr_list");

                this.mGroupFunctions = {

                    Price: function (oContext) {

                        var type = oContext.getProperty("rr_list>UdStatus");

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

                var list = this.getView().byId("resrectable");

                var binding = list.getBinding("items");

                binding.filter(aFilters, "Application");

            },



            _getDialog1: function () {

                if (!this._oDialog1) {

                    this._oDialog1 = sap.ui.xmlfragment("qualityportalQualityPortal.view.Fragments.ResultRecord", this);

                    this.getView().addDependent(this._oDialog1);

                }

                return this._oDialog1;

            },

            displaydetails_rr: function (oEvent) {

                this._getDialog1().open();

                var objcurrent1 = oEvent.getSource().getSelectedContexts()[0].getObject();

                var mat = new sap.ui.model.json.JSONModel(objcurrent1);

                this._oDialog1.setModel(mat);

            },

            onClose: function () {

                this._getDialog1().close();

            },

            ongoto: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                oRouter.navTo("Dashboard");

            }



        });



    });