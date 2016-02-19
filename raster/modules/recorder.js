
function __recorder(){
    this.active = false;

    this.startRecording = function(){
        this.active = true;
        this.startTime = Date.now();
        raster.recordInfo.startTime = this.startTime;
    };

    this.getTime = function(){
        return (Date.now() - this.startTime);        
    };
};