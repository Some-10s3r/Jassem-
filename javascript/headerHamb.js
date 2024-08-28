const onClickFunc = () => {
    const hamburger = document.querySelector('.hamburger');
    const hambLinks = document.querySelector('.hamb-links');
    const hambBg = document.querySelector('.hamb-bg');

    hamburger.classList.toggle('is-active');
    hambLinks.classList.toggle('active-links');
    hambBg.classList.toggle('active-bg');
};

document.querySelector('.hamb-bg').addEventListener('click', onClickFunc);
