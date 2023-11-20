sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ehsmehsm.controller.EHSMLoginPage", {
            onPress: function () {
                var user = this.getView().byId("name").getValue();
                var pass = this.getView().byId("password").getValue();
                window.console.log(user, pass);

                if (user !== "" && pass !== "") {

                    var surl = '/sap/opu/odata/sap/Z_YUKS_ODATA_EHSM_LOGIN_SRV/';
                    var oModel = new sap.ui.model.odata.ODataModel(surl, true);
                    var uri = "Userid='" + user + "',Password='" + pass + "'";
                    window.console.log(uri);
                    var userdata;
                    var status;
                    oModel.read("/Z_YUKS_ODATA_EHSM_LOGIN(" + uri + ")", {
                        context: null,
                        urlParameters: null,
                        async: false,
                        success: function (oData, OResponse) {
                            window.console.log("Success", oData);
                            userdata = oData;
                            status = oData["ReturnMsg"];
                        }
                    });

                    var sampleModel = new sap.ui.model.json.JSONModel(userdata);
                    sap.ui.getCore().setModel(sampleModel, "baseinfo");

                    if (status === "Success") {
                        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                        oRouter.navTo("EHSMDashboard");

                    } else if (status === "Incorrect Password") {
                        MessageToast.show("Incorrect Password!");
                        window.console.log("incorrect password");
                    } else {
                        var error2 = 'Incorrect User';
                        MessageToast.show(error2);
                        window.console.log("incorrect user");
                    }

                } else {
                    MessageToast.show("Fill out the Required Fields");

                }
            }

        });
    });