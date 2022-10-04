var back=document.getElementById('back');
window.onmousemove = function(event){
    var x=-event.clientX/10;
    var y=-event.clientY/15;
    back.style.backgroundPositionX = x+"px";
    back.style.backgroundPositionY = y+"px";
}


var Account=document.getElementById('Account');
var mm=PW.getElementById('PW');
function login(){
    if(Account.value==""||PW.value==""){
        alert("Account or passwords can not be empty");
        return false;
    }
    else if(Account.value!="111"||PW.value!="123456"){
        alert("Password Incorrect");
        return false;
    }
}

var con=document.getElementById('con')
function loadoff(){
    con.style.display="none";
}
function loadon(){
    con.style.display="flex";
}
window.onload=function(){
    loadon();
    setTimeout(loadoff,3000);
}
