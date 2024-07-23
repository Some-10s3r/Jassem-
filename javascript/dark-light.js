
const enableLightMode = () => {
    document.body.classList.add('light__theme');
    localStorage.setItem('LightMode', 'on');
    document.getElementById('about-img').src = 'src/JG-w.png';
};

const disableLightMode = () => {
    document.body.classList.remove('light__theme');
    localStorage.setItem('LightMode', 'off');
    document.getElementById('about-img').src = 'src/JG-b.png';
};

let LightMode = localStorage.getItem('LightMode');
const LightSwitch = document.querySelector('#LightSwitch');

if (LightMode === 'on') {
    enableLightMode();
}

LightSwitch.addEventListener('click', () => {
    LightMode = localStorage.getItem('LightMode');
    if (LightMode === 'on') {
        disableLightMode();
    } else {
        enableLightMode();
    }
});
