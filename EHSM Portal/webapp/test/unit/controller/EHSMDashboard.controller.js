/*global QUnit*/

sap.ui.define([
	"ehsmehsm/controller/EHSMDashboard.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EHSMDashboard Controller");

	QUnit.test("I should test the EHSMDashboard controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
