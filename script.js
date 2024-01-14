const allLists=document.querySelectorAll('li');
for(let index=0;index<allLists.length;index++){
    allLists[index].style.color = "white";
    allLists[index].style.border='5px';
    allLists[index].style.borderColor = "gray";
    allLists[0].textContent = "Mektebe gedirem";
    allLists[1].textContent = "Mektebden gelib hazirliga gedirem";
    allLists[2].textContent = "Hazirligdan gelib istrahet edirem";
    allLists[3].textContent = "Derslerimi eleyirem";
}



    const x = document.getElementsByTagName('h1');
    function changeColor(){
    x.style.color = "blue";
    if (x.style.color = "blue") {
      x.style.color = "red";
    };
    if(x.style.color = "red"){
        x.style.color = "green";
    }};
  
setInterval(changeColor, 2000);





