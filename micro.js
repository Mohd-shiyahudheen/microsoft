function validation(event){
    event.preventDefault();
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="shiyab" && password=="passwd") {
       location.replace("https://mohd-shiyahudheen.github.io/microsoft/index.html")
        
    }else{
        alert("logiong failed")
    }
}
if (window.location.href=="https://mohd-shiyahudheen.github.io/microsoft/index.html") {
    var a=document.getElementById("user");
    a.innerHTML="Shiyab";
    
}