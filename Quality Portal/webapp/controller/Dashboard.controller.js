sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("qualityportalQualityPortal.controller.Dashboard", {
            onInit: function() {

                 var sModel = sap.ui.getCore().getModel("baseinfo");
                
                 var myData = sModel.getData();
                
                 window.console.log(myData);
                
                 // this.getView().byId("userdetails").setText("Hello" + ", " + myData.Username + "(" + myData.Designation + ")");
                
                 this.getView().byId("userdetails");
                
                 },
                
                 onIL: function() {
                
                 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                
                 oRouter.navTo("InspectionLot");
                
                 },
                
                 onRR: function() {
                
                 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                
                 oRouter.navTo("ResultRecord");
                
                 },
                
                 onUD: function() {
                
                 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                
                 oRouter.navTo("UsageDecision");
                
                 },
                
                 onLogout: function() {
                
                 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                
                 oRouter.navTo("LoginPage");
                
                 }
                
               
                
                 });
                
               
                
                });