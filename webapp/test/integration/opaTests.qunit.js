/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/v2/PMV2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});