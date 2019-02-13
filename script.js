let fab = document.getElementById('fab');
let X = document.getElementById('X');

let viewport = document.querySelector('.viewport');

let toggleTools = () => {
    viewport.classList.toggle('tool-open')
}

fab.addEventListener('click', toggleTools);
X.addEventListener('click', toggleTools);