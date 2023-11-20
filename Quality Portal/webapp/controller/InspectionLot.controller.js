sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        return Controller.extend("qualityportalQualityPortal.controller.InspectionLot", {

            onInit: function () {

                var service = "/sap/opu/odata/sap/Z_YUKS_ODATA_SF_INSPECT_SRV/";

                var oModel = new sap.ui.model.odata.ODataModel(service, true);

                var uri = "Z_YUKS_ODATA_SF_INSPECTSet?$filter=Plant eq ''";

                var no;

                oModel.read(uri, {

                    context: null,

                    urlParameters: null,

                    async: false,

                    success: function (oData, oResponse) {

                        // for (var i = 0; i < oData.results.length; i++) {

                        // var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({

                        // pattern: "MMM dd, yyyy"

                        // });

                        // var dateStr = dateFormat.format(new Date(oData.results[i].CreatDat));

                        // oData.results[i].CreatDat = dateStr;

                        // }

                        // window.console.log(oData);

                        no = oData.results;

                    }
                });

                // var ooModel = new JSONModel(no);

                var ooModel = new sap.ui.model.json.JSONModel(no);

                this.getView().setModel(ooModel, "il_list");

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

                var list = this.getView().byId("insplottable");

                var binding = list.getBinding("items");

                binding.filter(aFilters, "Application");

            },
            _getDialog: function () {

                if (!this._oDialog) {

                    this._oDialog = sap.ui.xmlfragment("qualityportalQualityPortal.view.Fragments.InspectionLot", this);

                    this.getView().addDependent(this._oDialog);

                }

                return this._oDialog;

            },

            displaydetails_il: function (oEvent) {

                this._getDialog().open();

                var objcurrent = oEvent.getSource().getSelectedContexts()[0].getObject();

                var mat = new sap.ui.model.json.JSONModel(objcurrent);

                this._oDialog.setModel(mat);

            },

            onClose: function () {

                this._getDialog().close();

            },

            ongoto: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                oRouter.navTo("Dashboard");

            }

        });


    });





