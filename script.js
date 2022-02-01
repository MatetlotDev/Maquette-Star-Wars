const arrowRight = document.querySelector('.arrows :nth-child(2)');
const logos = document.querySelector('.logos');

arrowRight.onclick = () => {
    logos.classList.add('moveLeft');
    logos.children[0].classList.add('disapearLeft');
    logos.children[1].classList.add('appearLeft');
}