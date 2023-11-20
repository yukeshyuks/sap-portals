
sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageBox"
], function(Controller, MessageBox) {
  "use strict";

  return Controller.extend("newloginnewlogin.controller.View1", {
    onClick: function() {
      var url = "/sap/opu/odata/SAP/Z_YUKS_ODATA_SF_LOGIN_SRV";
      var id = this.getView().byId("user").getValue();
      var pass = this.getView().byId("password").getValue();

      var uri = "ZcusId='" + id + "',ZcusPassword='" + pass + "'";
      var a;
      var oD = new sap.ui.model.odata.ODataModel(url, true);
      oD.read("/Z_YUKS_ODATA_SF_LOGINSet("+uri+")", {

        context: null,
        urlParameter: null,
        async: false,
        success: function(oData, oResponse) {
          a = oData.Return;

        }.bind(this)
      });
      window.console.log(a);

      if (a === 'Login Successful') {
        MessageBox.success("Login Successful");
        var oR = sap.ui.core.UIComponent.getRouterFor(this);
        oR.navTo("View4");

      } else {
        MessageBox.error("Login Failed");
      }
    }
  });
});