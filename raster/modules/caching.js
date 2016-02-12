function cache() {
    var r = new XMLHttpRequest(); 
    r.open("POST", "raster/modules/export.php", false);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return; 
        raster.status = "cached";
        console.log(r.responseText);
    };
    
    r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    r.send("session="+JSON.stringify(raster));
}

function loadSession(timestamp) {
    var r = new XMLHttpRequest(); 
    r.open("POST", "raster/modules/import.php", false);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return; 
        raster = JSON.parse(r.responseText);
        raster.status = "loaded";
    };
    
    r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    r.send("timestamp="+timestamp);
}

function joinSession(timestamp) {
    var r = new XMLHttpRequest(); 
    r.open("POST", "raster/modules/import.php", false);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return; 
        joinedRaster = JSON.parse(r.responseText);
        joinedRaster.status = "loaded";
        rasters.push(joinedRaster);
    };
    
    r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    r.send("timestamp="+timestamp);
}