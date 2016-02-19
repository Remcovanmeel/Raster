function __listener() {
    this.startListening = function(){
        var handler = new __handler();

        document.addEventListener("click",handler.handleClick);
        document.addEventListener("scroll",handler.handleScroll);

        if (typeof window.addEventListener != "undefined")
            document.addEventListener("mousemove", handler.handleMouseStop, false);
        else if ( typeof window.attachEvent != "undefined")
            document.attachEvent("onmousemove", handler.handleMouseStop);

        window.onbeforeunload = function(){ handler.handleUnload(); };
    };
};