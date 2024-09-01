const observedEls = document.querySelectorAll('.fadeOut');
const staggerObservedEls = document.querySelectorAll('.slideOut')
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('fadeIn')
        }else{
            entry.target.classList.remove('fadeIn')
        }
    })
},{threshold:0.5});
observedEls.forEach(el=>{observer.observe(el)});
staggerObservedEls.forEach(el=>{staggerObserver.observe(el)});