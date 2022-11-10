const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//canvas commands  https://www.w3schools.com/tags/ref_canvas.asp



//___________________ mouse input___________________

let mouse = {
  down: false,
  x: 0,
  y: 0
};
canvas.addEventListener("mousemove", event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
canvas.addEventListener("mousedown", event => {
  mouse.down = true;
  // console.log(mouse);
});
canvas.addEventListener("mouseup", event => {
  mouse.down = false;
});


//___________________ key input___________________
let left = false
let right = false
let up = false
let down = false

window.addEventListener("keyup", function(event) {
    switch (event.code) {
        case "ArrowRight":
            right = false
            break;
        case "ArrowLeft":
            left = false
            break;
        case "ArrowUp":
            up = false
            break;
        case "ArrowDown":
            down = false
            break;
    }
});

window.addEventListener("keydown", function(event) {
       switch (event.code) {
        case "ArrowRight":
            right = true
            break
        case "ArrowLeft":
            left = true
            break
        case "ArrowUp":
            up = true
            break
        case "ArrowDown":
            down = true
            break
    }
})


function() {

  
}