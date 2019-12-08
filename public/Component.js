sap.ui.define([
   "sap/ui/core/UIComponent",
   'sap/ui/model/json/JSONModel',
   'sap/f/FlexibleColumnLayoutSemanticHelper',
   'sap/f/library'
], function (UIComponent, JSONModel, FlexibleColumnLayoutSemanticHelper, fioriLibrary) {
   "use strict";
   return UIComponent.extend("streuobst.webapp.Component", {
      metadata: {
         rootView: {
            manifest: 'json'
         }
      },

      init: function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);

         var oModel = new JSONModel();
         this.setModel(oModel);

         var oRouter = this.getRouter();
         oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
         oRouter.initialize();
      },

      _onBeforeRouteMatched: function (oEvent) {
         var oModel = this.getModel();
			var sLayout = oEvent.getParameters().arguments.layout;

			// If there is no layout parameter, set a default layout (normally OneColumn)
			if (!sLayout) {
				sLayout = fioriLibrary.LayoutType.OneColumn;
			}

			oModel.setProperty("/layout", sLayout);
      }
   });
});