(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
// document.getElementById("buy1").addEventListener("click",()=>{
//     document.getElementById("right").scroll(570,0)    

// })

// document.getElementById("buy2").addEventListener("click",()=>{
//     document.getElementById("right").scroll(1550,0)
// })

// document.getElementById("passs").addEventListener("focus",()=>{
//     document.getElementById("hint").style.display="block"
// })
// document.getElementById("passs").addEventListener("blur",()=>{
//     document.getElementById("hint").style.display="none"
// })

// document.getElementById("passs").addEventListener("keyup",()=>{
//     pass=document.getElementById("passs").value
//     cpass=document.getElementById("cpass").value

//     if(pass.match(/[A-Z]/g)!=null){document.getElementById("up").style.color="green"}else{document.getElementById("up").style.color="red"}
//     if(pass.match(/[a-z]/g)!=null){document.getElementById("lo").style.color="green"}else{document.getElementById("lo").style.color="red"}
//     if(pass.match(/[0-9]/g)!=null){document.getElementById("nu").style.color="green"}else{document.getElementById("nu").style.color="red"}
//     if(pass.match(/\W/g)!=null){document.getElementById("sp").style.color="green"}else{document.getElementById("sp").style.color="red"}

//    if(pass.match(/[A-Z]/g)!=null && pass.match(/[0-9]/g)!=null && pass.match(/\W/g)!=null){
//        document.getElementById("buy1").disabled=false
//        document.getElementById("buy1").style.backgroundColor="#fb641b"      
//        }else{
//        document.getElementById("buy1").style.backgroundColor="grey"      
//     }
// })

// document.getElementById("state").addEventListener("keyup",()=>{
//     hno=document.getElementById("hno").value
//     add1=document.getElementById("add2").value
//     add2=document.getElementById("add1").value
//     pin=document.getElementById("pin").value
//     city=document.getElementById("city").value
//     state=document.getElementById("state").value

//     if(hno!="" && add1!="" && pin!="" && city!="" && state!=""){
//        document.getElementById("buy2").disabled=false
//         document.getElementById("buy2").style.backgroundColor="#fb641b"
//     }else{
//        document.getElementById("buy2").disabled=true
//        document.getElementById("buy2").style.backgroundColor="grey"  
//     }
// })

// document.getElementById("nick").addEventListener("keyup",()=>{
//     nick=document.getElementById("nick").value


//     if(nick!=""){
//        document.getElementById("buy3").disabled=false
//         document.getElementById("buy3").style.backgroundColor="#fb641b"
//     }else{
//        document.getElementById("buy3").disabled=true
//        document.getElementById("buy3").style.backgroundColor="grey"  
//     }

//     document.getElementById("buy3").addEventListener("click",()=>{
//         location.href="/home/home.html"
//     })
// })



// document.getElementById("buy1").addEventListener("click",()=>{
    
//     name=document.getElementById("name").value
//     number=document.getElementById("number").value
//     email=document.getElementById("email").value
//     ps=document.getElementById("passs").value
//     cpass=document.getElementById("cpass").value


//     if(name==""){alert("please Enter Name");document.getElementById("name").focus();}
//     else if(number==""){alert("please Enter Number");document.getElementById("number").focus()}
//     else if(email==""){alert("please Enter email");document.getElementById("email").focus()}
    
//     if(number.match(/[0-9]/)==null){
//         (alert("Please Write in Number format"));document.getElementById("number").focus()}
//     else if(number.length>=11){
//         alert("number not be grater than 10 digits");document.getElementById("number").focus()}
//     else if(number.length<=9){
//         alert("number not be less than 10 digits");document.getElementById("number").focus()
//     }else if(email.includes(".com")==false ){
//         alert("Email Must Contain \".com\" format");document.getElementById("email").focus()
//     }else if(email.match(/@/)==null){
//         alert("Email Must Contain \"@\" format");document.getElementById("email").focus()
//     }else if(email.indexOf("@")>email.indexOf(".")){
//         alert(" \"@\" comes before \".\"");document.getElementById("email").focus()
//     }
    

//     if(ps!=cpass){
//         alert("password doesent match")
//     }else{
//         localStorage.setItem(number+"n",name)
//         localStorage.setItem(number+"e",email)
//         localStorage.setItem(number+"a",address)
//         localStorage.setItem(number+"p",pass)
//         alert("Your account has been created successfulluy!..")
//         location.href="profile.html"

//     }

// })






document.getElementById("buy1").addEventListener("click",()=>{
const fs = require('fs');

var jsonfile = require('jsonfile')
var file = '/tmp/user.json'
jsonfile.readFile(file, function(err, obj) {
console.dir(obj)
})
   
    nam=document.getElementById("name").value
    number=document.getElementById("number").value
    email=document.getElementById("email").value
    ps=document.getElementById("passs").value
    cpass=document.getElementById("cpass").value

    const user={
        "nam":nam,
        "number":number,
        "email":email,
        "ps":ps
        }

    const data = JSON.stringify(user);

    fs.readFile("user.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }last=jsonString.length
        
        a=(jsonString.slice(0,-1)+","+data+"]");
        fs.writeFile('user.json', a, err => {
          if (err) {
            console.error(err);
          }
        });
      });

      
})

},{"fs":1}]},{},[2]);
