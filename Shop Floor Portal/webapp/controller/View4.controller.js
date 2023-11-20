sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use restrict";

	return Controller.extend("newloginnewlogin.controller.View4", {
	
	onClick:function()
	{
		var oR  = sap.ui.core.UIComponent.getRouterFor(this);
		oR.navTo("View2");
	},
	onClick1:function()
	{
		var oR  = sap.ui.core.UIComponent.getRouterFor(this);
		oR.navTo("Production");
	},
            logout:function()
            {
                var oR  = sap.ui.core.UIComponent.getRouterFor(this);
                oR.navTo("View1");
            }
	
	
	
});
});