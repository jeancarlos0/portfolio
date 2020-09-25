const portfolioButton = document.querySelector(".header-container a");
const portfolioButtonIcon = document.querySelector(".header-container a .icon");

portfolioButton.addEventListener('mouseover', () => {
    portfolioButton.style.color = " #FDDB3A";
    portfolioButtonIcon.classList.add('active-button');
});

portfolioButton.addEventListener('mouseout', () => {
    portfolioButton.style.color = "white";
    portfolioButtonIcon.classList.remove('active-button');
});