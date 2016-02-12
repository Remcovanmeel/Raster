function handleClick(event){
    var top = (window.pageYOffset || d.scrollTop)  - (d.clientTop || 0);  
    var target = {x:event.clientX,y:event.clientY,z:top};
    raster.cursorEvents.targets.push(target);
}

function handleScroll(){
    var top = (window.pageYOffset || d.scrollTop)  - (d.clientTop || 0);    
    if (top > raster.scrollEvents.reach) {
        raster.scrollEvents.reach = top;
    };
}

function handleMouseStop(e){
    var top = (window.pageYOffset || d.scrollTop)  - (d.clientTop || 0);  
    clearTimeout(handleMouseStop.thread);
    var e=e? e : window.event,
    action = function(){
        var target = {x:e.clientX,y:e.clientY,z:top};
        raster.cursorEvents.route.push(target);
    };

    handleMouseStop.thread=setTimeout(action, 100);
}

function handleUnload() {
    cache();
}