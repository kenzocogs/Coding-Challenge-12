// Task 2: Configuring JavaScript for Drawing Context
//DOM + getting canvas context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const colorSelector = document.getElementById('selectColor')
const shapeSelector = document.querySelectorAll('input[name="shape"]')
const clearCanvasButton = document.getElementById('clearCanvas')


let drawing = false;
let startX, startY


//listener to start drawing if mouse is down
canvas.addEventListener("mousedown", (e) => {
drawing = true 
startX = e.offsetX
startY = e.offsetY
})

//listener to draw shapes as mouse moves
canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    draw(e.offsetX, e.offsetY); // function will me implemented in task 3
});

//listener to stop drawing if mouse goes up
canvas.addEventListener("mouseup", () => {
drawing = false
ctx.closePath();
})

//listener to stop drawing if mouse goes out of canvas 
canvas.addEventListener("mouseout", () => {
    drawing = false
    ctx.closePath();
    })

// Task 3: Implement Shape Drawing Logic

// drawing function
function draw(mouseX, mouseY) {
let shape = document.querySelector('input[name="shape"]:checked').value
ctx.beginPath (); 
ctx.strokeStyle = colorSelector.value

if (shape === 'line') {
    ctx.moveTo(startX, startY);  
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke()  
} else if (shape === 'rectangle') {
ctx.strokeRect(startX, startY, mouseX - startX, mouseY - startY)
} else if (shape === 'circle') {
    const radius = Math.sqrt(Math.pow(mouseX - startX, 2) + Math.pow(mouseY - startY, 2));
    ctx.arc (mouseX, mouseY, radius, 0, 2* Math.PI)
    ctx.stroke()
}

}

// Task 4: Add Color Selection and Canvas Clearing
clearCanvasButton.addEventListener ('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})