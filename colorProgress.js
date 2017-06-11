function colorProgress()
{
    this.value = 0;
    this.progLength = 500;
    this.press = false;
}
colorProgress.prototype.setBar = function(e)
{
    if ("targetTouches" in e)
    {
        var touch = event.changedTouches[0];
        var x = touch.pageX;
    }else
    {
        var x = e.x;
    }
    var offset = x - this.offset;
    var regexp = /[0-9]{1,3}/g;
    this.bar.width(offset);
    this.value = Math.round(offset * 255 / this.progLength);
    var strNum = this.value.toString(16);
    var setColor = this.penColor.css("background-color");
    var re = setColor.match(regexp);
    if (strNum.length == 1)
    {
        strNum = "0" + strNum;
    }
    if (this.colorId == "colorRed")
    {
        var color = "#" + strNum + "0000";
        re[0] = this.value.toString();
    }
    else if (this.colorId == "colorGreen")
    {
        var color = "#00" + strNum + "00";
        re[1] = this.value.toString();
    }
    else
    {
        var color = "#0000" + strNum;
        re[2] = this.value.toString();
    }
    this.bar.css("background-color", color);
    setColor = "rgb(" + re.join(", ") + ")";
    this.penColor.css("background-color", setColor);
}
colorProgress.prototype.myDown = function()
{
    var that = this;
    function ret(e)
    {
        that.setBar(e);
        that.press = true;
    }
    return ret;
}
colorProgress.prototype.myMove = function()
{
    var that = this;
    function ret(e)
    {
        if (that.press)
        {
            that.setBar(e);
        }
    }
    return ret;
}
colorProgress.prototype.myUp = function()
{
    var that = this;
    function ret(e)
    {
        if (that.press)
        {
            that.setBar(e);
            that.press = false;
        }
    }
    return ret;
}
colorProgress.prototype.init = function(colorId)
{
    this.colorId = colorId;
    this.prog = $("#" + colorId).get(0);
    this.bar = $("#" + colorId + " div:first");
    this.penColor = $(".penColor");
    this.prog.onmousedown = this.myDown();
    this.prog.onmousemove = this.myMove();
    this.prog.onmouseup = this.myUp();
    this.prog.addEventListener("touchstart", this.myDown());
    this.prog.addEventListener("touchmove", this.myMove());
    this.prog.addEventListener("touchend", this.myUp());
    this.offset = this.prog.offsetLeft;
    console.log(this);
}