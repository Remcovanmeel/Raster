function __cacher() {
    this.cache = function(){
        var r = new XMLHttpRequest(); 
        r.open("POST", "raster/modules/calls/export.php", false);
        r.onreadystatechange = function () {
            if (r.readyState != 4 || r.status != 200) return; 
            raster.status = "cached";
            console.log(r.responseText);
        };
        
        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        r.send("session="+JSON.stringify(raster));
    };

    this.loadSession = function(timestamp) {
        var r = new XMLHttpRequest(); 
        r.open("POST", "raster/modules/calls/import.php", false);
        r.onreadystatechange = function () {
            if (r.readyState != 4 || r.status != 200) return; 
            raster = JSON.parse(r.responseText);
            raster.status = "loaded";
        };
        
        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        r.send("timestamp="+timestamp);
    };

    this.joinSession = function (timestamp) {
        var r = new XMLHttpRequest(); 
        r.open("POST", "raster/modules/calls/import.php", false);
        r.onreadystatechange = function () {
            if (r.readyState != 4 || r.status != 200) return; 
            joinedRaster = JSON.parse(r.responseText);
            joinedRaster.status = "loaded";
            rasters.push(joinedRaster);
        };
        
        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        r.send("timestamp="+timestamp);
    };
};