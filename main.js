var content_table=document.querySelector('.table-content');
var clicker=document.querySelector('.clicker');
var clicker_text=document.querySelector('.clicker i');
clicker.addEventListener("click",()=>{
content_table.classList.toggle("on");
if(content_table.classList.contains("on")==true){
    clicker_text.innerHTML=">"
}
else{
    clicker_text.innerHTML="<"
}

})