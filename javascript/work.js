const slider = document.querySelector('.work-slider');
const images = document.querySelectorAll('.work-project');
const workTitle = document.querySelector('.work-title');
const workDesc = document.querySelector('.work-desc');
Descs = [
    "'Unleash your creativity with our three awesome tools: blob maker, gradient generator, and neumorphism creator. Design and copy the CSS. No more struggling with code—just pure design fun!'",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae animi, corrupti doloremque ducimus laudantium magni iure cupiditate quibusdam at inventore!",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae animi, corrupti doloremque ducimus laudantium magni iure cupiditate quibusdam at inventore!"
];
Symbols= ["@","#","$",'&',"%","^"];

// functions :
const titleSeperate = () =>{
    workText = workTitle.textContent.split('');
    workTitle.innerHTML = "";
    workText.forEach(Char => {
        const span = document.createElement("span");
        span.classList.add('char');
        span.innerText = Char;
        workTitle.appendChild(span);
    });
};
const titleAnimate = async (prevCh,ch) => {
    for(let i =prevCh.length;i>1;i--){
        await new Promise((resolve) => setTimeout(resolve, 100));
        workTitle.innerText = prevCh.substring(0,i - 1);
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
    for(let i=1;i<ch.length;i++){
        if(i>=Symbols.length){
            workTitle.innerText += "-";
        }else{
        workTitle.innerText += Symbols[i];
        };
        await new Promise((resolve) => setTimeout(resolve, 150));
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
    let lastCh = workTitle.innerText;
    ch = "|"+ch
    for(let i = 1;i<ch.length+1;i++){
        await new Promise((resolve) => setTimeout(resolve, 150));
        workTitle.innerText = ch.substring(0,i)+lastCh.substring(i+1,ch.length);
    };
    titleSeperate();
};
//ui & logic:

titleSeperate();
slider.addEventListener('pointerdown',e=>{
    slider.dataset.mousePos = e.clientX;
    
});
slider.addEventListener('pointermove',e=>{
    if(slider.dataset.mousePos == "0") return;
    let mouseDelta = parseFloat(slider.dataset.mousePos) - e.clientX;
    let maxDelta = slider.offsetWidth;
    let percentage = (mouseDelta / maxDelta) * -100;
    let newPercentage = Math.max(Math.min(parseFloat(slider.dataset.prevPer)+percentage,50),-50);
    console.log(newPercentage)
    slider.dataset.newPer = newPercentage;
    slider.animate({
        transform: `translateX(${newPercentage}%)`
    }, {duration:1200,fill:"forwards"});
    for(const image of images){
        image.animate({
            objectPosition: `${newPercentage + 50}% 50%`
        },{duration:1200, fill: "forwards"});
    };
});
slider.addEventListener('pointerup',e=>{
    slider.dataset.mousePos = "0";
    slider.dataset.prevPer = slider.dataset.newPer;
});
slider.addEventListener('pointerleave',e=>{
    slider.dataset.mousePos = "0";
    slider.dataset.prevPer = slider.dataset.newPer;
})
for(const image of images){
    image.addEventListener("dblclick",e=>{
        let newWorkHeader = image.dataset.workHeader;
        let prevWorkHeader = workTitle.innerText;
        workTitle.href = `https://some-10s3r.github.io/${image.dataset.workHref}`
        workDesc.textContent = Descs[parseInt(image.dataset.projectIndex)]
        titleAnimate(prevWorkHeader,newWorkHeader);
    });
};
