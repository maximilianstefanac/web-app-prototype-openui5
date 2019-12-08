sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("streuobst.webapp.controller.TreeDetail", {
        onInit: function () {
            var oOwnerComponent = this.getOwnerComponent();

			this.oRouter = oOwnerComponent.getRouter();
			this.oModel = oOwnerComponent.getModel();

			// this.oRouter.getRoute("master").attachPatternMatched(this._onProductMatched, this);
			// this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
        },

        _onProductMatched: function (oEvent) {
			this._product = oEvent.getParameter("arguments").product || this._product || "0";
			this.getView().bindElement({
				path: "/ProductCollection/" + this._product,
				model: "products"
			});
		},

        handleClose: function () {
            this.oRouter.navTo("map");

            var that = this;

            setTimeout(function () {
                console.log("close tree detail", that.getOwnerComponent().oMapControl.map.invalidateSize());
            }, 300);
        }
    });
});