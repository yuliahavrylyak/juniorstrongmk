function time(){
    let dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
    setTimeout(time, 1000);
    }
    time();
    