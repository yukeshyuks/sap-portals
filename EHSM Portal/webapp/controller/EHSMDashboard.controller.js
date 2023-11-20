sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ehsmehsm.controller.EHSMDashboard", {
            onInit: function () {
                var sModel = sap.ui.getCore().getModel("baseinfo");
                var myData = sModel.getData();
                window.console.log(myData);
                this.getView().byId("userdetails").setText("Hello" + ", " + myData.Username + "(" + myData.Designation + ")");
            },
            onIM: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("EHSMInciMang");
            },
            onRM: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("EHSMRiskMang");
            },
            onLogout: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("EHSMLoginPage");
            }
        });
    });