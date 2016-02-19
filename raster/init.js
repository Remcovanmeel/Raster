document.addEventListener('DOMContentLoaded',function(){
    init();
},false);

var raster = {};
var rasters = [];
var d = document.documentElement;

function init() {
    raster = new __raster();
    var listener = new __listener();
    listener.startListening();
};