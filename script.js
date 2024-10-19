let lists=document.getElementsByClassName("lists");
let rightBox=document.getElementById("right");
let leftBox=document.getElementById("left");
let selected=null;

for(list of lists)
{
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop",function(e){
            rightBox.appendChild(selected);
            
        });
        leftBox.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(selected);
            
        });
    })
}