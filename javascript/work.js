const slider = document.querySelector('.work-slider');
const images = document.querySelectorAll('.work-project');
let IQuant = images.length;
const workTitle = document.querySelector('.work-title');
const workDesc = document.querySelector('.work-desc');
const Descs = [
    "'Unleash your creativity with our three awesome tools: blob maker, gradient generator, and neumorphism creator. Design and copy the CSS. No more struggling with code—just pure design fun!'",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae animi, corrupti doloremque ducimus laudantium magni iure cupiditate quibusdam at inventore!",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae animi, corrupti doloremque ducimus laudantium magni iure cupiditate quibusdam at inventore!"
];
const Symbols= ["@","#","$",'&',"%","^"];
const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// functions :
const titleAnimateV2 = e=>{
    let i = 0;
    const interval = setInterval(()=>{
        workTitle.innerText = e.target.dataset.workHeader.split("")
        .map((letter,index)=>{
            if(index<i){
                return e.target.dataset.workHeader[index]
            }
            return letters[Math.floor(Math.random()*letters.length)]
        })
        .join("")
        if(i>=e.target.dataset.workHeader.length){
            clearInterval(interval)
            titleSeperate()
        };
        i+=1/2;
    },30);
}
const titleSeperate = () =>{
    workText = workTitle.innerText.split('');
    workTitle.innerHTML = "";
    workText.forEach(Char => {
        const span = document.createElement("span");
        span.classList.add('char');
        span.innerText = Char;
        workTitle.appendChild(span);
    });
};
// logic:

titleSeperate();
slider.addEventListener('pointerdown',e=>{
    slider.dataset.mousePos = e.clientX;
});
slider.addEventListener('pointermove',e=>{
    if(slider.dataset.mousePos == "0") return;
    let mouseDelta = parseFloat(slider.dataset.mousePos) - e.clientX;
    let maxDelta = slider.offsetWidth;
    let percentage = (mouseDelta / maxDelta) * -100;
    let newPercentage = Math.max(Math.min(parseFloat(slider.dataset.prevPer)+percentage,20*IQuant),-20*IQuant);
    let IPrecentage = newPercentage/2;
    slider.dataset.newPer = newPercentage;
    slider.animate({
        transform: `translateX(${newPercentage}%)`
    }, {duration:1200,fill:"forwards"});
    for(const image of images){
        image.animate({
            objectPosition: `${(IPrecentage * (-1)) + 50}% 50%`
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
        images.forEach(image=>{image.classList.remove('proj-active')});
        e.target.classList.add('proj-active');
        workTitle.href = `https://some-10s3r.github.io/${image.dataset.workHref}`;
        workDesc.textContent = Descs[parseInt(image.dataset.projectIndex)];
        titleAnimateV2(e);
    });
};
