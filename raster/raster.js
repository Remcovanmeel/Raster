document.addEventListener('DOMContentLoaded',function(){
    init();
},false);

var raster = {};
var rasters = [];
var d = document.documentElement;

// intiate raster

function init() {
    raster = {
        sessionId: Date.now(),
        status: 'initiated',
        cursorEvents: {
            targets:[],
            route:[]
        },
        scrollEvents: {
            reach: 0
        }
    }

    document.addEventListener("click",handleClick);
    document.addEventListener("scroll",handleScroll);
    
    if (typeof window.addEventListener != "undefined")
        document.addEventListener("mousemove", handleMouseStop, false);
    else if ( typeof window.attachEvent != "undefined")
        document.attachEvent("onmousemove", handleMouseStop);

    window.onbeforeunload = function(){
        handleUnload();
    };
}