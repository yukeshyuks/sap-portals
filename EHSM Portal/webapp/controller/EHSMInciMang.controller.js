sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        return Controller.extend("ehsmehsm.controller.EHSMInciMang", {

            onInit: function () {
                var service = "/sap/opu/odata/sap/Z_YUKS_ODATA_EHSM_INCIDENT_SRV/";
                var oModel = new sap.ui.model.odata.ODataModel(service, true);
                var uri = "Z_YUKS_ODATA_EHSM_INCIDENTSet?$filter=Plant eq '0001'";
                var no;

                oModel.read(uri, {
                    context: null,
                    urlParameters: null,
                    async: false,
                    success: function (oData, oResponse) {
                        no = oData.results;
                    }
                });
                var ooModel = new sap.ui.model.json.JSONModel(no);
                this.getView().setModel(ooModel, "inci_list");
            },
            onSearch: function (oEvt) {
                var aFilters = [];
                var sQuery = oEvt.getSource().getValue();
                window.console.log(sQuery);
                if (sQuery && sQuery.length > 0) {
                    var filter = new Filter("Recn", FilterOperator.Contains, sQuery);
                    aFilters.push(filter);
                }
                var list = this.getView().byId("incidenttable");
                var binding = list.getBinding("items");
                binding.filter(aFilters, "Application");
            },
            displaydetails_inci: function (oEvent) {
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
                oRouter.navTo("EHSMDashboard");
            }
        });
    });