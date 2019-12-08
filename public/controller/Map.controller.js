sap.ui.define([
    "sap/ui/core/mvc/Controller",    
    'sap/f/library'
], function (Controller, fioriLibrary) {
    "use strict";

    return Controller.extend("streuobst.webapp.controller.Map", {
        
        
        _openDetailPageFactory: function () {
            
            var that = this

            return function (e) {
                

                that.oRouter.navTo("treeDetail");

                var leafletComponent = this;

                setTimeout(function () {
                    leafletComponent._map.invalidateSize();
                    leafletComponent._map.panTo(e.latlng);
                }, 200);

                
            }

			
        },

        onInit: function () {
            var oMapControl = this.getView().byId("leafletMap");
            oMapControl.setMarkerClickHandler(this._openDetailPageFactory());
            this.oRouter = this.getOwnerComponent().getRouter();
            this.getOwnerComponent().oMapControl = oMapControl;
        }
    });
});