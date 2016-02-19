document.addEventListener('DOMContentLoaded',function(){
    init();
},false);

var d = document.documentElement;

var raster = {};
var rasters = [];
var recorder = {};

function init() {
    raster = new __raster();

    var listener = new __listener();
    listener.startListening();

    recorder = new __recorder();
    recorder.startRecording();
};