function ChangeColor()
{
    document.querySelector(".conitner").style.backgroundColor="yellow";
}

function ChangeSize()
{
    document.querySelector(".size").style.width="500px";
}


function Addimage()
{
    document.querySelector(".img").setAttribute("src","https://png.pngtree.com/element_our/sm/20180524/sm_5b072d393d61e.jpg");
}


function RemoveImage() {
    let image = document.getElementById("remove");
    image.remove();
  }