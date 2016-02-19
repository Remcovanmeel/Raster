
function __handler() {
    this.handleClick = function(event){
        var top = (window.pageYOffset || d.scrollTop)  - (d.clientTop || 0);  
        var target = {x:event.clientX,y:(event.clientY + top),t:recorder.getTime()};
        raster.cursorEvents.targets.push(target);
    };

    this.handleScroll = function() {
        var top = (window.pageYOffset || d.scrollTop)  - (d.clientTop || 0);
        if (top > raster.scrollEvents.reach) {raster.scrollEvents.reach = top;};

        clearTimeout(this.thread);
        var e=e? e : window.event,
        action = function(){
            var target = {y:top,t:recorder.getTime()};
            raster.scrollEvents.route.push(target);
        };

        this.thread = setTimeout(action, 100);
    };

   this.handleMouseStop = function(e){
        var top = (window.pageYOffset || d.scrollTop)  - (d.clientTop || 0);  
        clearTimeout(this.thread);
        var e=e? e : window.event,
        action = function(){
            var target = {x:e.clientX,y:(e.clientY + top),t:recorder.getTime()};
            raster.cursorEvents.route.push(target);
        };

        this.thread = setTimeout(action, 100);
    };

    this.handleUnload = function() {
        raster.recordInfo.endTime = recorder.getTime();

        var cacher = new __cacher();
        cacher.cache();
    };
};