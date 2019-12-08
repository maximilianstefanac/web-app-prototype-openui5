sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
    var leafletMap = Control.extend("streuobst.webapp.control.LeafletMap", {
        metadata: {
            properties: {

            }
        },
        init: function () {
            
        },
        renderer: function (oRm, oControl) {
            oRm.openStart("div", oControl);
            oRm.addClass("streuobstControlLeafletMap");
            oRm.openEnd();
            oRm.close("div");
        }
    });

    leafletMap.prototype.onAfterRendering = function () {
        // alert("after Rendering LeafletMap");
        var that = this;

        

        setTimeout(function () {
            var gewannPosition = L.latLng(49.217332, 8.677177);

            that.map = L.map(that.getDomRef(), {
                center: gewannPosition,
                zoom: 17,
                zoomControl: true,
                attributionControl: true
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(that.map);

            var gewannPolygon = L.polygon([
                L.latLng(49.218531, 8.677058),
                L.latLng(49.216258, 8.676849),
                L.latLng(49.216280, 8.674748),
                L.latLng(49.216217, 8.674712),
                L.latLng(49.216199, 8.676846),
                L.latLng(49.216100, 8.676861),
                L.latLng(49.216188, 8.677283),
                L.latLng(49.218530, 8.677462)
            ], {
                color: 'red'
            }).addTo(that.map);

            var trees = [
                L.latLng(49.218523, 8.677202),
                L.latLng(49.218400, 8.677193),
                L.latLng(49.218310, 8.677184),
                L.latLng(49.217826, 8.677112),
                L.latLng(49.217069, 8.677103),
                L.latLng(49.218023, 8.677368),
                L.latLng(49.216232, 8.676591),
                L.latLng(49.216239, 8.676211),
                L.latLng(49.216240, 8.675681),
                L.latLng(49.216245, 8.675173)
            ];

            that.treeMarkers = [];

            console.log(that._handler);

            trees.forEach((tree) => {
                that.treeMarkers.push(
                    L.marker(tree).addTo(that.map).on('click', that._handler)
                );
            });

            that.map.invalidateSize();

            //allign view to contain polygon
            that.map.fitBounds(gewannPolygon.getBounds());
        }, 500);
    };

    leafletMap.prototype.setMarkerClickHandler = function (handler) {
        console.log("setMarkerClickHandler", handler);
        this._handler = handler;
    }


    return leafletMap;
});