/*const stick1 = document.getElementById("stick1")
stick1.style.backgroundColor = "#333"
stick1.style.color = "#FFF"

stick1.innerHTML = "<h1>Sticky</h1><h6>Note</h6>"*/

/*sticks=document.querySelectorAll("#stick1,#stick2,#stick3")
sticks.forEach(element => {
    element.style.backgroundColor ="#F00"
    element.style.color ="#00F"
    element.style.fontSize = "0.7em"
});*/

function hide() {

    stick = document.getElementsByClassName('stick');
    if(stick[0].style.display=="none"){
        stick[0].style.display="block",stick[1].style.display="block",stick[2].style.display="block"
    }
    else
        stick[0].style.display="none",stick[1].style.display="none",stick[2].style.display="none";
}