document.addEventListener('DOMContentLoaded', function() {
    // Get the elements by their IDs
    const elementToHover = document.getElementById('single-technology-wrap');
    const elementToChange = document.getElementById('slika-tehnologije');

    // Add event listener for hover
    elementToHover.addEventListener('mouseenter', function() {
    // Add a class to the other element on hover
        elementToChange.classList.add('animate__animated');
        elementToChange.classList.add('animate__fadeIn');
    });

    elementToHover.addEventListener('mouseleave', function() {
        elementToChange.classList.remove('animate__animated');
        elementToChange.classList.remove('animate__fadeIn');
    });

    // console.log(elementToHover);
});