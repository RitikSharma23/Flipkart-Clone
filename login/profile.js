document.getElementById("buy").addEventListener("click",login)
document.getElementById("idd").addEventListener("focus",cook)

function login(){
    id=document.getElementById("idd").value
    pass=document.getElementById("pass").value
    
     cpass=localStorage.getItem(id+"p")
     nam=localStorage.getItem(id+"n")
     add=localStorage.getItem(id+"a")

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
                document.cookie=localStorage.getItem(id+"n")
                location.href="/home/home.html"
            }else{
                alert(("not match"))
            }
        }
     }
 
}
