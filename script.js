


function getCurrTime() {
    const d = new Date();
    const time = d.getTime();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const sec = d.getSeconds();
    console.log(time);
    console.log(hour);
    console.log(minute);
    console.log(sec);
    const currTime = hour +" : " + minute+" : "+sec;
    document.getElementById("timeDiv").innerHTML=`<h1>${currTime}</h1>`;
    
}

getCurrTime();
setInterval(getCurrTime,1000);

