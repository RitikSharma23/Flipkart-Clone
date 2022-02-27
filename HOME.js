    var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 6){
        counter = 1;
      }
    }, 5000);
    document.getElementById("next").addEventListener("click",next);
    document.getElementById("pre").addEventListener("click",pre);
    function next(){
      var a=document.getElementById("image");
      var b=document.getElementById("next");
      var c=document.getElementById("pre");
      a.style.left="-495px";
      b.style.visibility="hidden";
      c.style.visibility="visible";
    }
    function pre(){
      var a=document.getElementById("image");
      var b=document.getElementById("next");
      var c=document.getElementById("pre");
      a.style.left="0px";
      b.style.visibility="visible";
      c.style.visibility="hidden";
    }


    document.getElementById("next2").addEventListener("click",next2);
    document.getElementById("pre2").addEventListener("click",pre2);
    function next2(){
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
    }