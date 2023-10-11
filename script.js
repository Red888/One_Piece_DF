function closepreloader(){
    document.getElementById("loader").style.display = 'none';
}


window.addEventListener("load",function(){
    setTimeout(closepreloader, 3000);
    
});