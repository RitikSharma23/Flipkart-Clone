

document.getElementById("buy").addEventListener("click",login)

function login(){
    id=document.getElementById("idd").value
    pass=document.getElementById("pass").value
    
     cpass=localStorage.getItem(id+"p")
     nam=localStorage.getItem(id+"n")
     add=localStorage.getItem(id+"a")
    //  em=localStorage.getItem(id+"e")
 

     if(id==""){
         alert("enter id")
         document.getElementById("idd").focus()
     }else{
        if(pass==""){
            alert("enter pass")
            document.getElementById("pass").focus()
        }else{
            if(pass==cpass){
                alert("match")
                localStorage.setItem("tempid",nam)
                location.href="/home/home.html"
            }else{
                alert(("not match"))
            }
        }
     }
 
};
