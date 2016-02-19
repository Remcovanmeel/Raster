
function __raster() {
    this.sessionId = Date.now();
    this.status = 'initiated';
    this.cursorEvents = { targets:[], route:[] };
    this.scrollEvents = { reach: 0, route:[] };
    this.recordInfo = {};
};



 