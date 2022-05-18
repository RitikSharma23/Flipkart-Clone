document.getElementById("buy").addEventListener("click",login)
document.getElementById("idd").addEventListener("focus",cook)

function login(){
    id=document.getElementById("idd").value
    pass=document.getElementById("pass").value
    
    //  cpass=localStorage.getItem(id+"p")
    //  nam=localStorage.getItem(id+"n")
    //  add=localStorage.getItem(id+"a")

     if(id==""){
         alert("enter id")
         document.getElementById("idd").focus()
     }else{
        if(pass==""){
            alert("enter pass")
            document.getElementById("pass").focus()
        }else{
            // if(pass==cpass){
            //     alert("match")

                var http=new XMLHttpRequest
                http.open("GET","user.json",true)
                http.onload=function(){
                users=JSON.parse(this.responseText)
                output=''
               for(var i in users){
                    if(id==users[i].number && pass==users[i].password){
                        alert(users[i].name)
                    }else{
                        alert("wrong id and password")
                    }
               }
            
                // document.getElementById('users').innerHTML=output
                }
                http.send()

                document.cookie=localStorage.getItem(id+"n")
                // location.href="/home/home.html"
            
            }
            }
        }
     
 

