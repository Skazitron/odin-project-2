var body = document.querySelector('body');

// manipulate the first box here
var mainBox = document.querySelector('.box');
mainBox.style.cssText = 'text-align: center; font-size: 18px; margin-top: 30px; margin-bottom: 20px;'
mainBox.textContent = 'Select Grid: '

// manipulating rows and colums
var regularGridRow = document.createElement('div')
var regularGridColumn = document.createElement('div')
regularGridRow.classList = 'row';
regularGridColumn.classlist = 'column';
regularGridColumn.cssText = 'display: inline;'
regularGridRow.appendChild(regularGridColumn);
regularGridColumn.style.cssText = 'border: 2px solid grey; width:150px; height:150px; text-align: center; display:inline-block; background-color: white; margin-right: -2px';
regularGridRow.style.cssText = 'text-align: center; margin-bottom: -7px;'

// button for selecting grid layout

var buttonGridSelector = document.createElement('button')
buttonGridSelector.textContent = 'Select';
buttonGridSelector.classList = 'select-button'
buttonGridSelector.style.cssText = 'color: white; background-color: black; border-style: solid; border-radius: 6px; width: 4%; font-size: 18px; margin: 0;'
buttonGridSelector.addEventListener('click', gridLayout)
function gridLayout(e){
    console.log(e.target.classList.value)
    regularGridRow.appendChild(regularGridColumn);
    sketchBox.appendChild(regularGridRow);
    if(e.target.classList.value == 'select-button'){
        for(i=0; i<tempColumnNum -1; i++){
            regularGridRow.appendChild(regularGridColumn.cloneNode(true));
        }
        for(i=0; i<tempRowNum - 1; i++){
            sketchBox.appendChild(regularGridRow.cloneNode(true));
        }
    }
}

// options 
var optionGridRow = document.createElement('select');
optionGridRow.id = 'setRow';
optionGridRow.addEventListener('change', selectFunction);
var optionGridColumn = document.createElement('select');
optionGridColumn.addEventListener('change', selectFunction);
optionGridColumn.id = 'setColumn';
var optionsList = document.createElement('option');
for(i=1; i<=8; i++){
    optionsList.value = i;
    optionsList.textContent = i;
    optionGridRow.appendChild(optionsList.cloneNode(true))
    optionGridColumn.appendChild(optionsList.cloneNode(true))
}
var optionsBox = document.createElement('div')
optionsBox.style.cssText = 'margin-top: 10px; margin-bottom: 8px;'
optionsBox.textContent = 'Rows and Columns: '
optionsBox.appendChild(optionGridRow);
optionsBox.appendChild(optionGridColumn);
var tempColumnNum;
var tempRowNum;
function selectFunction(e){ // how do I pick the specific option?
    let selectedIndex = event.target.selectedIndex;
    console.log(e.target.options[selectedIndex].value);
    var whichSelect = e.target.id
    console.log(e.target.id)
    if(whichSelect == 'setRow'){
        tempRowNum = e.target.options[selectedIndex].value;
        console.log(tempRowNum);
    }
    if(whichSelect == 'setColumn'){
        tempColumnNum = e.target.options[selectedIndex].value;
        console.log(tempColumnNum)
    }

}

//sketchBox

var sketchBox = document.createElement('div')
sketchBox.appendChild(regularGridRow)

//colors 


//testing
mainBox.appendChild(optionsBox);
mainBox.appendChild(buttonGridSelector);
body.appendChild(sketchBox)

