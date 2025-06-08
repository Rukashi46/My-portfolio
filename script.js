const dialog=document.querySelector("dialog");
const ShowButton=document.querySelector("dialog + Button");
const CloseButton=document.querySelector("dialog button");

ShowButton.addEventListener("click",() =>{
    dialog.showModal();
    dialog.classList.remove("fade-in")
    void dialog.offsetWidth;
    dialog.classList.add("fade-in");
});
CloseButton.addEventListener("click",()=>{
    dialog.classList.remove("fade-in")
setTimeout(() =>{dialog.close();},300)
});