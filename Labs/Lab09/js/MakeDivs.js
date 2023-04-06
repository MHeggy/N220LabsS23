let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

for(let i = 0; i < objects.length; i++) {
    const div = document.createElement("div");
    const obj = objects[i];
    div.style.backgroundColor = obj.color;
    div.style.height = `${obj.height}px`;
    div.style.width = `${obj.width}px`;
    document.body.appendChild(div);
}
