sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use restrict";

	return Controller.extend("newloginnewlogin.controller.View2", {
            back:function()
            {
                var oR  = sap.ui.core.UIComponent.getRouterFor(this);
                oR.navTo("View4");
            },
		onInit : function()
		{
			var url1 = "/sap/opu/odata/SAP/Z_YUKS_ODATA_SF_PLANNEDORDER1_SRV";
			var result1;
			var od1 = new sap.ui.model.odata.ODataModel(url1,true);
			od1.read("Z_YUKS_ODATA_SF_PLANNEDORDER1Set?$filter=IPlant eq '0001'&$format=json",{
				context:null,
				urlParameter:null,
				async:false,
				success: function(oData, oResponse)
				{
					result1 = oData.results;
				}
			});
			var jsonconv2 = new sap.ui.model.json.JSONModel();
			jsonconv2.setData({
				"results":result1
			});
			window.console.log(result1);
			this.getView().byId("Plannedorder").setModel(jsonconv2);
		}
		
	
});

});



sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller, JSONModel, Filter, FilterOperator, Fragment, Router) {
	"use strict";
	return Controller.extend("newloginnewlogin.controller.View2", {	
		onSubmit    : function()
		{
			var url = "/sap/opu/odata/SAP/Z_YUKS_ODATA_SF_PLANNEDORDER1_SRV";
			var fromdate = this.getView().byId("fromdate").getValue();
            var todate = this.getView().byId("todate").getValue();
            window.console.log(fromdate, todate);
            var split1 = fromdate.split("-");
            var split2 = todate.split("-");
            var d1 = split1[2];
            var m1 = split1[1];
            var y1 = split1[0];
            window.console.log(d1, m1, y1);
            var d2 = split2[2];
            var m2 = split2[1];
            var y2 = split2[0];
            window.console.log(d2, m2, y2);
            var d = [];
			var od = new sap.ui.model.odata.ODataModel(url,true);
			od.read("Z_YUKS_ODATA_SF_PLANNEDORDER1Set?$filter=IPlant eq '0001'&$format=json",{
				context:null,
				urlParameter:null,
				async:false,
				success: function(oData, oResponse)
				{
			if(oData.hasOwnProperty("results")){
                       oData.results.forEach(function(innerobject){
                        var formatdate=sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"dd-MM-yyyy"});
                        innerobject.Psttr=formatdate.format(innerobject.Psttr);
                        innerobject.Pedtr=formatdate.format(innerobject.Pedtr);
                            var date6 = innerobject.Psttr;
                            window.console.log(date6);
                            var split3 = date6.split("-");
                            var d3 = split3[0];
                            var m3 = split3[1];
                            var y3 = split3[2];
                            window.console.log(d3, m3, y3);
                            var date1 = new Date(y1, m1 - 1, d1);
                            var date2 = new Date(y2, m2 - 1, d2);
                            var date3 = new Date(y3, m3 - 1, d3);
                         window.console.log(date1, date2, date3);
                            if (date3 >= date1 && date3 <= date2) {
                                window.console.log('Date 3 is between Date 1 and Date 2');
                                d.push(innerobject);
                            }
                            else {
                                window.console.log('Date 3 is not between Date 1 and Date 2');
                                return false;
                            }
                    });
                }
				}
			});
			var jsonconv = new sap.ui.model.json.JSONModel();
			jsonconv.setData({
				"results":d
			});
			this.getView().byId("Plannedorder").setModel(jsonconv);
		},
			back: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View4");
		}
	
    });
});