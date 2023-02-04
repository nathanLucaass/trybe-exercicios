window.onload = () => {
    const peoma = document.getElementById('poema')
    const backgroundColor = localStorage.getItem('backgroundColor')
    peoma.style.backgroundColor = backgroundColor
    const color = localStorage.getItem('color');
    peoma.style.color = color;
    const fontSize = localStorage.getItem('fontSize');
    peoma.style.fontSize = fontSize
    const spacing = localStorage.getItem('spacing');
    peoma.style.lineHeight = spacing
}


const backGroundColor = () => {
    const white = document.getElementById('CWhite');
    const black = document.getElementById('CBlack');
    const green = document.getElementById('CGreen');
    const blue = document.getElementById('CBlue');
    const yellow = document.getElementById('CYellow');
    const peoma = document.getElementById('poema');

    white.addEventListener('click', () => {
        poema.style.backgroundColor = 'white';
        localStorage.setItem('backgroundColor', 'white');
    });

    black.addEventListener('click', () => {
        poema.style.backgroundColor = 'black';
        localStorage.setItem('backgroundColor', 'black');
    });

    green.addEventListener('click', () => {
        poema.style.backgroundColor = 'green';
        localStorage.setItem('backgroundColor', 'green');
    });

    blue.addEventListener('click', () => {
        poema.style.backgroundColor = 'blue';
        localStorage.setItem('backgroundColor', 'blue');
    });

    yellow.addEventListener('click', () => {
        poema.style.backgroundColor = 'yellow';
        localStorage.setItem('backgroundColor', 'yellow');
    });


};
backGroundColor()

const fontColor = () => {
    const white = document.getElementById('FWhite');
    const black = document.getElementById('FBlack');
    const red = document.getElementById('FRed');
    const peoma = document.getElementById('poema');

    white.addEventListener('click', () => {
        poema.style.color = 'white'
        localStorage.setItem('color', 'white');
    });
    black.addEventListener('click', () => {
        poema.style.color = 'black';
        localStorage.setItem('color', 'black');
    });
    red.addEventListener('click', () => {
        poema.style.color = 'red';
        localStorage.setItem('color', 'red');
    });

};
fontColor()

const fontSize = () => {
    const px8 = document.getElementById('8px');
    const px10 = document.getElementById('10px');
    const px12 = document.getElementById('12px');
    const px14 = document.getElementById('14px');
    const px20 = document.getElementById('20px');
    const peoma = document.getElementById('poema');

    px8.addEventListener('click', () => {
        poema.style.fontSize = '8px';
        localStorage.setItem('fontSize', '8px');
    });
    px10.addEventListener('click', () => {
        poema.style.fontSize = '10px';
        localStorage.setItem('fontSize', '10px');
    });
    px12.addEventListener('click', () => {
        poema.style.fontSize = '12px';
        localStorage.setItem('fontSize', '12px');
    });
    px14.addEventListener('click', () => {
        poema.style.fontSize = '14px';
        localStorage.setItem('fontSize', '14px');
    });
    px20.addEventListener('click', () => {
        poema.style.fontSize = '20px';
        localStorage.setItem('fontSize', '20px');
    })
};
fontSize();

const spacing = () => {
    const e1 = document.getElementById('1');
    const normal = document.getElementById('normal');
    const e15 = document.getElementById('1.5');
    const e2 = document.getElementById('2');
    const e3 = document.getElementById('3');
    const peoma = document.getElementById('poema');

    e1.addEventListener('click', () => {
        peoma.style.lineHeight = '1';
        localStorage.setItem('spacing', '1');
    });
    normal.addEventListener('click', () => {
        peoma.style.lineHeight = 'normal';
        localStorage.setItem('spacing', 'Normal');
    });
    e15.addEventListener('click', () => {
        peoma.style.lineHeight = '1.5';
        localStorage.setItem('spacing', '1.5');
    });
    e2.addEventListener('click', () => {
        peoma.style.lineHeight = '2'
        localStorage.setItem('spacing', '2');
    });
    e3.addEventListener('click', () => {
        peoma.style.lineHeight = '3';
        localStorage.setItem('spacing', '3');
    });
}
spacing();



