let boxColor = document.getElementsByClassName('colors')[0];
let board = document.getElementsByClassName('box')[0];
let area = document.forms.editForm.editArea;
let check = false;
let check1 = false;
/* random function*/
randomizecolor = () => { return Math.round(Math.random() * 255) };
/* start function create color box*/
for (const iterator of boxColor.children) {
    const r = randomizecolor();
    const g = randomizecolor();
    const b = randomizecolor();
    iterator.style.backgroundColor = `rgb(${r},${g},${b})`;
    iterator.onclick = function () {
        if (check) {
            board.style.backgroundColor = this.style.backgroundColor;
        }
        else {
            board.style.color = this.style.backgroundColor;
        }
        boxColor.classList.remove('showColor');
    }
}
/* end function create color box*/
/* start function show edit*/
function editClick() {
    document.forms.editForm.classList.add('show');
    document.forms.styleForm.classList.remove('show');
    area.value = board.innerHTML;
}
/* end function show edit*/
/* start function edit*/
function saveClick() {
    board.innerHTML = area.value;
    document.forms.editForm.classList.remove('show');
    if (check1) {
        board.style.height = 'auto';
        board.style.paddingBottom = '5vh';
    }
}
/* end function edit*/
/* start function show style*/
function styleClick() {
    document.forms.styleForm.classList.add('show');
    document.forms.editForm.classList.remove('show');
}
/* end function show style*/
/* start function change font size*/
function radioClick() {
    board.style.fontSize = event.target.value;
}
/* end function change font size*/
/* start function change font family*/
function selecyClick() {
    board.style.fontFamily = event.target.value;
}
/* end function change font family*/
/* start function show color box for text*/
function showColors() {
    boxColor.classList.add('showColor');
    check = false;
}
/* end function show color box for text*/
/* start function show color box for background*/
function showColorsBackground() {
    boxColor.classList.add('showColor');
    check = true;
}
/* end function show color box for background*/
/* start function bold text*/
function boldClick() {
    if (document.forms.styleForm.bold.checked) {
        board.style.fontWeight = 'bold';
    }
    else {
        board.style.fontWeight = '';
    }
}
/* end function bold text*/
/* start function italic text*/
function cursiveClick() {
    if (document.forms.styleForm.cursive.checked) {
        board.style.fontStyle = 'italic';
    }
    else {
        board.style.fontStyle = '';
    }
}
/* end function italic text*/
/* start function show add panel*/
function addClick() {
    document.getElementsByClassName('wrapper')[0].classList.remove('show');
    document.getElementsByClassName('wrapperAdd')[0].classList.add('show');
}
/* end function show add panel*/
/* start function show list panel*/
function radioClickList() {
    document.forms.listForm.classList.add('show');
    document.forms.tableForm.classList.remove('show');
    document.getElementsByClassName('box')[2].style.height = '40vh';
}
/* end function show list panel*/
/* start function show table panel*/
function radioClickTable() {
    document.forms.listForm.classList.remove('show');
    document.forms.tableForm.classList.add('show');
    document.getElementsByClassName('box')[2].style.height = '55vh'
}
/* end function show table panel*/
/* start function create list*/
function createList() {
    let li = document.forms.listForm.countLi.value;
    let mark = document.forms.listForm.typeMark.value;
    area.value += `<ul style="list-style-type: ${mark}">`;
    for (let i = 0; i < li; i++) {
        area.value += `<li>item ${i + 1}</li>`;
    }
    area.value += '</ul>';
    document.getElementsByClassName('wrapper')[0].classList.add('show');
    document.getElementsByClassName('wrapperAdd')[0].classList.remove('show');
    document.forms.listForm.classList.remove('show');
    document.getElementById('radioList').checked = false;
    check1 = true;
}
/* end function create list*/
/* start function create table*/
function createTable() {
    let tr = document.forms.tableForm.countTR.value;
    let td = document.forms.tableForm.countTD.value;
    let wb = document.forms.tableForm.widthBorder.value;
    let bStyle = document.forms.tableForm.typeBorder.value;
    let bColor = document.forms.tableForm.colorBorder.value;
    let widthTD = document.forms.tableForm.widthTD.value;
    let heightTD = document.forms.tableForm.heightTD.value;
    area.value += `<table style="border-width: ${wb}px; border-style: ${bStyle}; border-color:${bColor};">`
    for (let i = 0; i < tr; i++) {
        area.value += `<tr style="height: ${heightTD}px; border-width: ${wb}px; border-style: ${bStyle}; border-color:${bColor};">`;
        for (let j = 0; j < td; j++) {
            area.value += `<td style="width: ${widthTD}px; border-width: ${wb}px; border-style: ${bStyle}; border-color:${bColor};">TD</td>`
        }
        area.value += "</tr>"
    }
    area.value += "</table>"
    document.getElementsByClassName('wrapper')[0].classList.add('show');
    document.getElementsByClassName('wrapperAdd')[0].classList.remove('show');
    document.forms.tableForm.classList.remove('show');
    document.forms.tableForm.reset();
    document.getElementById('radioTable').checked = false;
    document.getElementsByClassName('box')[2].style.height = '40vh';
    check1 = true;
}
/* end function create table*/