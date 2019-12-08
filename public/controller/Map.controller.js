sap.ui.define([
    "sap/ui/core/mvc/Controller",    
    'sap/f/library'
], function (Controller, fioriLibrary) {
    "use strict";

    return Controller.extend("streuobst.webapp.controller.Map", {
        
        
        _openDetailPageFactory: function () {
            
            var that = this

            return function (e) {
                // this._map.invalidateSize();
                // var oFCL = that.getView().getParent().getParent();
                // oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsBeginExpanded);

                var leafletComponent = this;

                setTimeout(function () {
                    leafletComponent._map.invalidateSize();
                    leafletComponent._map.panTo(e.latlng);
                }, 200);

                // var oNextUIState;
                // that.getOwnerComponent().getHelper().then(function (oHelper) {
                //     console.log(that);
                //     oNextUIState = oHelper.getNextUIState(1);
                //     that.oRouter.navTo("detail");
                // }.bind(that));

                console.log(that.oRouter);
                that.oRouter.navTo("detail");
            }

			
        },

        onInit: function () {
            var oMapControl = this.getView().byId("leafletMap");
            oMapControl.setMarkerClickHandler(this._openDetailPageFactory());
            this.oRouter = this.getOwnerComponent().getRouter();
        }
    });
});