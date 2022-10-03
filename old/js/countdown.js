function countdown(target, element, message) {
    var dn = new Date();
    var dt = new Date(target);
    var diff = dt.getTime() - dn.getTime();
    diff /= 1000;
                         
    // done
    if(diff <= 0) {
        document.getElementById(element).innerHTML = message;
        return(0);
    }
                         
    // days
    var tmp = diff;
    var d = Math.floor(tmp / 24 / 3600);
    tmp = tmp % (24 * 3600);
                         
    // hours
    var h = Math.floor(tmp / 3600);
    tmp = tmp % 3600;
                         
    // minutes
    var m = Math.floor(tmp / 60);
    tmp = tmp % 60;
                         
    // seconds
    var s = Math.floor(tmp);
                         
    var str =  d + " ";
    if (d > 4 || d == 0) 
        str += "dní, ";
    else if (d > 1) 
        str += "dní, ";
    else  
        str += "deň, ";
                         
    if (h < 10) str += "0";
    str += h + ":";
    if (m < 10) str += "0";
    str += m + ":";
    if (s < 10) str += "0";
    str += s;  
                         
    document.getElementById(element).innerHTML = str;
                         
    setTimeout("countdown('"+target+"','"+element+"','"+message+"')",999); 
} 