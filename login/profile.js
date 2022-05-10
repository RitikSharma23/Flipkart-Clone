

document.getElementById("buy").addEventListener("click",login)

function login(){
    id=document.getElementById("idd").value
    pass=document.getElementById("pass").value
    
     localStorage.setItem(id+"id",id)
     localStorage.setItem(pass+"pass",pass)

     localStorage.setItem("tempid",id)
     localStorage.setItem("temppass",pass)

    // alert("Your account has been created successfulluy!..")

    location.href="/home/home.html"
};
