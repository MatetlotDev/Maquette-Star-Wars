const arrowRight = document.querySelector('.arrows :nth-child(2)');
const arrowLeft = document.querySelector('.arrows :nth-child(1)');
const fades = document.querySelectorAll('.fade');
const pictures = document.querySelector('.pictures');
const dates = document.querySelector('.date');
const dots = document.querySelector('.dots');


let position = 0; // initiale value for first position

// when click on arrow right
arrowRight.onclick = () => {
    if(position < 2){
        // fade out for logos, title and text
        fades.forEach(el => disappear('left', el.children[position]));
        fades.forEach(el => appear('right', el.children[position+1]));

        // fade out/in for second number of date
        disappear('left', dates.querySelector('.second').children[position]);
        appear('right', dates.querySelector('.second').children[position+1]);

        // fade ou/in for first number of date
        if(position < 1){
            disappear('left',dates.querySelector('.first').children[position]);
            appear('right', dates.querySelector('.first').children[position+1]);
        } 

        // movement for posters
        pictures.children[position].className = 'imageDisappearLeft';
        pictures.children[position+1].className = 'imageAppearLeft';

        // changing colors for arrows
        arrowLeft.style.color = '#fff38a';
        if(position === 1) arrowRight.style.color = '#827B68';

        // progress bar 
        let percent = 0;
        if(position === 1) percent = 25;
        let id = setInterval(() => {
            if(percent == position * 25 ){
                dots.children[position+2].style.background = '#fff38a';
                clearInterval(id);
            } 
            percent++;
            dots.children[0].style.width = percent + '%';
        },10)
        
        position++; // change position to next one
    }
}

// when click on arrow left -> everything is pretty much the same then the other one, but on the other direction
arrowLeft.onclick = () => {
    if(position > 0){
        fades.forEach(el => appear('left', el.children[position-1])); // fade in
        fades.forEach(el => disappear('right', el.children[position])); // fade out
        
        appear('left', dates.querySelector('.second').children[position-1]);
        disappear('right', dates.querySelector('.second').children[position]);

        if(position < 2){
            appear('left', dates.querySelector('.first').children[position-1]);
            disappear('right', dates.querySelector('.first').children[position]);
        } 
        
        pictures.children[position-1].className = 'imageAppearRight';
        pictures.children[position].className = 'imageDisappearRight';

        if(position === 1) arrowLeft.style.color = '#827B68';
        else if(position === 2) arrowRight.style.color = '#fff38a';

        let percent = 25;
        if(position === 2) percent = 50;
        let id = setInterval(() => {
            if(percent == position * 25 ) clearInterval(id);
            percent--;
            dots.children[0].style.width = percent + '%';
        },10)

        dots.children[position+2].style.background = '#827B68';
    
        position--; // change position to previous
    }
}

// fade out
function disappear (direction, elem) {
    elem.className = '';
    if(direction == 'left') elem.classList.add('disappearLeft')
    else elem.classList.add('disappearRight')
}

// fade in
function appear (direction, elem) {
    elem.className = '';
    if(direction == 'left') elem.classList.add('appearLeft')
    else elem.classList.add('appearRight')
}

