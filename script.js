const gridContainer = document.querySelector('.gridContainer');
const clear = document.querySelector('.clear');
const gridSizeRange = document.querySelector('.gridSize');
const color = document.querySelector('.color');
const rainbow = document.querySelector('.rainbow');
const gridCells =  document.querySelectorAll('.gridCells');




function createGrid(){
    
    gridSizeRange.addEventListener('input', event=>{
            
        let gridSize = 16;
        gridSize = event.target.value;
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

        gridContainer.innerHTML="";

        for(let i=0; i < gridSize * gridSize; i++) {
            const grid = document.createElement('div');
            grid.classList.add('gridCells');
            gridContainer.appendChild(grid);
            const logSize = document.querySelector('.logSize');
        logSize.textContent = `${gridSize}x${gridSize}`;
        
        }
        setEvents();
        });
        gridSizeRange.dispatchEvent(new Event('input'));
       
        
}
    
        
createGrid();

//store all functions added to the grid
function setEvents(){


//clear Grid
function clearGrid(){
    const gridCells = document.querySelectorAll('.gridCells');

    clear.addEventListener('click', ()=>{
        gridCells.forEach(gridCells =>{
            gridCells.style.backgroundColor = 'black';
        })
    })
}
clearGrid();




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

let chooseColor = 'white';

//paint on drag
function paintCell(){
    const cells = document.querySelectorAll('.gridCells');
    cells.forEach(cell =>{
        cell.addEventListener('mouseover', ()=>{
            if(onClick === true){
            cell.style.backgroundColor = chooseColor;
            }
        });
    });
}

paintCell();


//choose color
function colorSelector(){
    const color = document.querySelector('.colorSel');
    color.addEventListener('input', event =>{
        chooseColor = event.target.value
    })
}

colorSelector();




//rainbow mode
let randColor = () => {
    let hexColor = Math.floor(Math.random() * 16777213).toString(16);
    return `#${hexColor}`;
}
   
randColor();

function getRainbow(){
    const rainbowColor = document.querySelector('.rainbow');
    const gridCells = document.querySelectorAll('.gridCells');
    rainbowColor.addEventListener('click',()=>{
    gridCells.forEach(cell=>{
        cell.style.backgroundColor = randColor();
    
    })
    })


        }
    


getRainbow();


function bordersRemover(){
    let border = false;
    const gridCells =  document.querySelectorAll('.gridCells');
    let borders = document.querySelector('.gridBorder');
    borders.addEventListener('click',()=>{
        border = !border;
        if(border === true){
            gridCells.forEach(cell =>{
                cell.style.border = "none";
            });
        }else if(border === false){
                gridCells.forEach(cell=>{
                    cell.style.border = "thin solid grey";
            })}
        })
        }
            bordersRemover();





        function eraseSingle(){
            const grid = document.querySelectorAll('.gridCells');
            grid.forEach(cell =>{
            cell.addEventListener('dblclick',()=>{
                    cell.style.backgroundColor = 'black';
                })
            })
        }

        eraseSingle();

        }
    







setEvents();