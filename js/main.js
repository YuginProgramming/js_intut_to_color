
const colorOne = document.querySelector('.colorOne')

document.querySelector('.inp').onchange = inputChange;

function inputChange() {
const inp = document.querySelector('.inp').value;
    console.log(inp);
    colorOne.style.background = inp
}