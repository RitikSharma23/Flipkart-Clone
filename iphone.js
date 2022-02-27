document.getElementById("btn1").addEventListener("click",a1);
document.getElementById("btn2").addEventListener("click",a2);
document.getElementById("btn3").addEventListener("click",a3);
document.getElementById("btn4").addEventListener("click",a4);
document.getElementById("btn5").addEventListener("click",a5);

function a1(){
    var a=document.getElementById("photo");
    a.style.backgroundImage="url(icons/Iphone_icons/1.jpeg)";
}
function a2(){
    var a=document.getElementById("photo");
    a.style.backgroundImage="url(icons/Iphone_icons/2.jpeg)";
}
function a3(){
    var a=document.getElementById("photo");
    a.style.backgroundImage="url(icons/Iphone_icons/3.jpeg)";
}
function a4(){
    var a=document.getElementById("photo");
    a.style.backgroundImage="url(icons/Iphone_icons/4.jpeg)";
}
function a5(){
    var a=document.getElementById("photo");
    a.style.backgroundImage="url(icons/Iphone_icons/5.jpeg)";
}








document.getElementById("next2").addEventListener("click",next2);
    document.getElementById("pre2").addEventListener("click",pre2);
    function next2(){
      document.getElementById("iphone").style.visibility="hidden"
      var a=document.getElementById("div2");
      var b=document.getElementById("next2");
      var c=document.getElementById("pre2");
      a.style.left="-47vw";
      b.style.visibility="hidden";
      c.style.visibility="visible";
    }
    function pre2(){
      var a=document.getElementById("div2");
      var b=document.getElementById("next2");
      var c=document.getElementById("pre2");
      a.style.left="0px";
      b.style.visibility="visible";
      c.style.visibility="hidden";
      ;
      
    }
    

   function time(){
    document.getElementById("iphone").style.visibility="visible"
   }