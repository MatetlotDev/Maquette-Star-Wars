const arrowRight = document.querySelector('.arrows :nth-child(2)');
const arrowLeft = document.querySelector('.arrows :nth-child(1)');
const logos = document.querySelector('.logos');


arrowRight.onclick = () => {
    disappear('left', logos.children[0])
    appear('right', logos.children[1])
}

arrowLeft.onclick = () => {
    appear('left', logos.children[0]);
    disappear('right', logos.children[1]);
}


function disappear (direction, elem) {
    elem.className = '';
    if(direction == 'left') elem.classList.add('disappearLeft')
    else elem.classList.add('disappearRight')
}

function appear (direction, elem) {
    elem.className = ''
    if(direction == 'left') elem.classList.add('appearLeft')
    else elem.classList.add('appearRight')
}