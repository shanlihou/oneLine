function drawOneLine(){
    this.x = -1;
    this.y = -1;
    this.bDraw = false;
}
drawOneLine.prototype.myMove = function()
{
    that = this;
    function ret(e)
    {
        if(that.bDraw)
        {
            that.mCxt.beginPath();
            that.mCxt.moveTo(that.x, that.y);
            that.mCxt.lineTo(e.x, e.y);
            that.mCxt.stroke();
        }
        that.x = e.x;
        that.y = e.y;
    }
    return ret;
}
drawOneLine.prototype.myDown = function(e)
{
    that = this;
    function ret(e)
    {
        console.log(that.x, that.y);
        that.x = e.x;
        that.y = e.y;
        that.bDraw = true;
    }
    return ret;
}
drawOneLine.prototype.myUp = function(e)
{
    that = this;
    function ret(e)
    {
        console.log(that.x, that.y);
        if(that.bDraw)
        {
            console.log(that);
            that.mCxt.beginPath();
            that.mCxt.moveTo(that.x, that.y);
            that.mCxt.lineTo(e.x, e.y);
            that.mCxt.stroke();
        }
        that.x = -1;
        that.y = -1;
        that.bDraw = false;
    }
    return ret;
}
drawOneLine.prototype.init = function() {
    this.mCanvas = document.getElementById("myCanvas");
    this.mCxt = this.mCanvas.getContext("2d");
    this.mCxt.fillStyle = "#E4B57E";
    this.mCxt.fillRect(0,0,150,75);
    this.mCanvas.onmousemove = this.myMove();
    this.mCanvas.onmousedown = this.myDown();
    this.mCanvas.onmouseup = this.myUp();
};
var draw = new drawOneLine();
function init()
{
    draw.init();
}
console.log(draw.x, draw.y);