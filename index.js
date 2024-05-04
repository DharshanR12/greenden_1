//selecting slide navbar , menuicon

var slidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click",function(){
    slidenav.style.right=0
})
closenav.addEventListener("click",function(){
    slidenav.style.right="-50%"
})