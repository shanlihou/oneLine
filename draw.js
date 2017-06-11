function drawOneLine(){
    this.x = -1;
    this.y = -1;
    this.bDraw = false;
    this.mLength = 100;
    this.mRed = 0;
    this.mGreen = 0;
    this.mBlue = 0;
}
drawOneLine.prototype.calcLength = function(x, y)
{
    console.log(this.x, this.y, x, y);
    if (x > this.x)
    {
        xLen = x - this.x;
    }else
    {
        xLen = this.x - x;
    }
    
    if (y > this.y)
    {
        yLen = y - this.y;
    }else
    {
        yLen = this.y - y;
    }
    len = Math.sqrt(xLen * xLen + yLen * yLen);
    if (len > this.mLength)
    {
        x = this.x + (x - this.x) * this.mLength / len;
        y = this.y + (y - this.y) * this.mLength / len;
        this.mLength = 0;
    }else
    {
        this.mLength -= len;
    }
    var color = this.penColor.css("background-color");
    this.mCxt.strokeStyle = color;
    this.mCxt.beginPath();
    this.mCxt.moveTo(that.x, that.y);
    this.mCxt.lineTo(x, y);
    this.mCxt.stroke();
    $("#progress").css("width", this.mLength + "%");
    this.x = x;
    this.y = y;
}
drawOneLine.prototype.myMove = function()
{
    that = this;
    function ret(e)
    {
        if ("targetTouches" in e)
        {
        	e.preventDefault();
            var touch = event.changedTouches[0];
            var x = touch.pageX;
            var y = touch.pageY;
        }else
        {
            x = e.x;
            y = e.y;
        }
        if(that.bDraw && that.mLength > 0)
        {
            that.calcLength(x, y);
        }
    }
    return ret;
}
drawOneLine.prototype.myDown = function(e)
{
    that = this;
    function ret(e)
    {
        if ("targetTouches" in e)
        {
        	e.preventDefault();
            var touch = event.changedTouches[0];
            var x = touch.pageX;
            var y = touch.pageY;
        }else
        {
            x = e.x;
            y = e.y;
        }
        console.log(that);
        that.x = x;
        that.y = y;
        that.bDraw = true;
    }
    return ret;
}
drawOneLine.prototype.myUp = function(e)
{
    that = this;
    function ret(e)
    {
        if ("targetTouches" in e)
        {
        	console.log(e);
        	e.preventDefault();
            var touch = event.changedTouches[0];
            var x = touch.pageX;
            var y = touch.pageY;
        }else
        {
            x = e.x;
            y = e.y;
        }
        if(that.bDraw && that.mLength > 0)
        {
            that.calcLength(x, y);
        }
        that.bDraw = false;
    }
    return ret;
}
drawOneLine.prototype.init = function() {
    this.mCanvas = document.getElementById("myCanvas");
    this.penColor = $(".penColor");
    this.mCxt = this.mCanvas.getContext("2d");
    this.mCxt.fillStyle = "#ffffff";
    this.mCxt.fillRect(0, 0, 500, 500);
    this.mCanvas.onmousemove = this.myMove();
    this.mCanvas.onmousedown = this.myDown();
    this.mCanvas.onmouseup = this.myUp();
    this.mCanvas.addEventListener("touchstart", this.myDown());
    this.mCanvas.addEventListener("touchmove", this.myMove());
    this.mCanvas.addEventListener("touchend", this.myUp());
    $("#progress").css("width", "100%");
    console.log(this);
};
var draw = new drawOneLine();
function init()
{
    draw.init();
    var prog1 = new colorProgress();
    var prog2 = new colorProgress();
    var prog3 = new colorProgress();
    
    prog1.init("colorRed");
    prog2.init("colorGreen");
    prog3.init("colorBlue");
}
console.log(draw);