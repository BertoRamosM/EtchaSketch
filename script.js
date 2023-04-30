const gridContainer = document.querySelector(".gridContainer")

const cells = document.querySelectorAll('.gridCells');
 
//grid creation
function createGrid(){
    gridContainer.innerHTML = "";
}

let gridRow = 16;
let gridCol = 16;




gridContainer.style.gridTemplateColumns = `repeat(${gridCol}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat (${gridRow}, 1fr)`;


for (let i = 0; i < gridCol * gridRow -1; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCells");
    gridContainer.appendChild(gridCell);
}






//paint cells individually
//paint on click
let onClick = false;

function paintClick(){
    const cells = document.querySelectorAll('.gridCells');
    cells.forEach(cell=>{
        cell.addEventListener('mousedown',()=>{
            onClick = true;
        })
        cell.addEventListener('mouseup', ()=>{
            onClick = false;
    })
})}

paintClick();



//paint on drag
function paintWhite(){
    const cells = document.querySelectorAll('.gridCells');
    cells.forEach(cell =>{
        cell.addEventListener('mouseover', ()=>{
            if(onClick === true){
            cell.style.backgroundColor = "white";
            }
        });
    });
}

paintWhite();


//turn back a single cell to black
function PaintCellBlack(){
    const cells = document.querySelectorAll('.gridCells');
    cells.forEach(cell =>{
        cell.addEventListener('dblclick',()=>{
            cell.style.backgroundColor = "black";
        })
    })
}
PaintCellBlack();


//delete all color inserted, back to black
function clearBoard(){

    const cells = document.querySelectorAll('.gridCells');
    const clearBtn = document.querySelector(".clear");

    clearBtn.addEventListener('click', ()=>{
        cells.forEach(cell=>{
            cell.style.backgroundColor = "black";
        })
    })

}
clearBoard();

//change size by using the input slide
function ChangeSize(){
    const size = document.querySelector('.gridSize');
    size.addEventListener('input',()=>{
 
       gridCol = size.value;
       gridRow = size.value;

    gridContainer.style.gridTemplateColumns = `repeat(${gridCol}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat (${gridRow}, 1fr)`;
    })
}

ChangeSize();



function rainBow(){
    const random = document.querySelector('.rainbow');
    random.addEventListener('click', ()=>{
        
    })
}