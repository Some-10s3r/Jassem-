document.addEventListener('mousemove',e=>{
    const cursor = document.querySelector('.cursor')
    cursor.style.top= `${e.clientY}px`
    cursor.style.left=`${e.clientX}px`
})
document.addEventListener('mousedown',e=>{
    document.querySelector('.cursor').classList.add('cursor-click')
})
document.addEventListener('mouseup',e=>{
    document.querySelector('.cursor').classList.remove('cursor-click')
})