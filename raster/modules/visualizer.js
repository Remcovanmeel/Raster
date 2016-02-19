
function visualizer(){
    visuals = "";

    this.visualizeTargets(raster);
    this.visualizeReach(raster);
    this.visualizeRoute(raster);

    document.getElementById('visuals').innerHTML = "<iframe style='position:absolute; left:0; top:0;' src='http://hupsakee.dev.rb-media.nl' scrolling=no width='100%' height='100%'></iframe>" + visuals;

    this.visualizeTargets = function (obj) {
        for (var i = obj.cursorEvents.targets.length - 1; i >= 0; i--) {
            obj.cursorEvents.targets[i];
            visuals = visuals + "<i style='left: " + obj.cursorEvents.targets[i].x + "px; top: " + (obj.cursorEvents.targets[i].y + obj.cursorEvents.targets[i].z) + "px; position:absolute; background:#294040; border:solid 4px #81C9CA; border-radius:50%; height: 30px; width: 30px; display:block; z-index:30;'></i>"
        };
    }

    this.visualizeReach = function (obj) {
        visuals = visuals + "<i style='height: " + (window.innerHeight + obj.scrollEvents.reach) + "px; top: 0; left: 0; position:absolute; background:rgba(47,140,141,0.1); border-bottom:solid 5px rgba(47,140,141,0.2); width: 100%; display:block; z-index:20;'></i>"
    }

    this.visualizeRoute = function (obj) {
        for (var i = obj.cursorEvents.route.length - 1; i >= 0; i--) {
            obj.cursorEvents.route[i];    
            visuals = visuals + "<i style='left: " + obj.cursorEvents.route[i].x + "px; top: " + (obj.cursorEvents.route[i].y + obj.cursorEvents.route[i].z) + "px; position:absolute; background:#3BAFB0; border:solid 2px #54FBFC; border-radius:50%; height: 5px; width: 5px; display:block; z-index:10;'></i>"
        };
    }

    this.visualizeAll = function () {
        visuals = "";

        for (var i = rasters.length - 1; i >= 0; i--) {
            visualizeTargets(rasters[i]);
            visualizeReach(rasters[i]);
            visualizeRoute(rasters[i]);
        };

        document.body.innerHTML = visuals;
    }
}