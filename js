document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
        document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});
