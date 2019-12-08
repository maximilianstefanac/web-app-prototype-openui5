sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "streuobst",
		settings : {
			id : "streuobst"
		},
		async: true
	}).placeAt("content");
});