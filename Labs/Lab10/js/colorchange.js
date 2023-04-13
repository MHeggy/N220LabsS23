let boxes = document.querySelectorAll("divs")
//Div 1 Style
boxes.style.width = 200 + "px";
boxes.style.height = 200 + "px";
boxes.style.backgroundColor = "grey";
boxes.style.cssFloat = "left";
boxes.style.display = "inline-block";

boxes.addEventListener('click', (e)=> {
    boxes.forEach((box, index) => {
        if(e.target === box) {
            if(index == 0) {
                box.style.backgroundColor = 'red';
            }
            else if(index == 1) {
                box.style.backgroundColor = 'black';
            }
            else if(index == 2) {
                box.style.backgroundColor = 'green';
            }
        }
    })
})