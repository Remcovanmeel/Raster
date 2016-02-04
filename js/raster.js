document.addEventListener('DOMContentLoaded',function(){
    init();
},false);

var raster = {};
var d = document.documentElement;

// intiate raster

function init() {
    raster = {
        sessionId: 1,
        status: 'initiated',
        cursorEvents: {
            targets:[],
            route:[]
        },
        scrollEvents: {
            reach:0
        }
    }

    document.addEventListener("click",handleClick);
    document.addEventListener("scroll",handleScroll);
    
    if (typeof window.addEventListener != "undefined")
        document.addEventListener("mousemove", handleMouseStop, false);
    else if ( typeof window.attachEvent != "undefined")
        document.attachEvent("onmousemove", handleMouseStop);
}

// eventhandlers

function handleClick(event){
    var target = {x:event.clientX,y:event.clientY};
    raster.cursorEvents.targets.push(target);
}

function handleScroll(){
    var top = (window.pageYOffset || d.scrollTop)  - (d.clientTop || 0);    
    if (top > raster.scrollEvents.reach) {
        raster.scrollEvents.reach = top;
    };
}

function handleMouseStop(e){
    clearTimeout(handleMouseStop.thread);
    var e=e? e : window.event,
    action = function(){
        var target = {x:e.clientX,y:e.clientY};
        raster.cursorEvents.route.push(target);
    };

    handleMouseStop.thread=setTimeout(action, 300);
}


// methods
