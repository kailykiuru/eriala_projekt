const pildikonteiner = document.querySelectorAll('.image-container');

pildikonteiner.forEach(container => {
    const pilt = container.querySelector('.carousel-image');
    const tekst = container.querySelector('.text');
    
    container.addEventListener('mouseenter', () => {
        tekst.style.opacity = '1';  // näitab teksti
        pilt.style.transform = 'scale(1.1)';  // zoomib pilti

    });

    container.addEventListener('mouseleave', () => {
        tekst.style.opacity = '0';  // peidab teksti
        pilt.style.transform = 'scale(1)';  // pilt väiksemaks
    });
});