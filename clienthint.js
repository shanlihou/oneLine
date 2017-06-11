var xmlHttp

function add(str)
{
    if (str.length == 0)
    { 
        document.getElementById("txtHint").innerHTML=""
        return
    }
    xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null)
    {
        alert ("Browser does not support HTTP Request")
        return
    } 
    var url = "phphint.php"
    url=url + "?type=add"
    url=url + "&item=" + str
    url=url + "&itemType=eat"
    xmlHttp.onreadystatechange = function()
    {
        
    }    
    xmlHttp.open("GET",url,true)
    xmlHttp.send(null)
} 

function rand()
{
    xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null)
    {
        alert ("Browser does not support HTTP Request")
        return
    } 
    var url = "phphint.php"
    url=url + "?type=rand"
    url=url + "&itemType=eat"
    xmlHttp.onreadystatechange = function()
    {
        document.getElementById("txtHint").innerHTML = xmlHttp.responseText
    }    
    xmlHttp.open("GET",url,true)
    xmlHttp.send(null)
}

function GetXmlHttpObject()
{
    var xmlHttp=null;
    try
    {
        // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
    }
    catch (e)
    {
    // Internet Explorer
        try
        {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}