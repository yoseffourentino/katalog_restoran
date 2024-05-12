import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css'
import data from '../public/data/data.js';

const contentContainer = document.getElementById('content-container');

data.forEach((e) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div>
            <h3 class="resto-name">${e.name}</h3>
            <img src="${e.pictureId}" alt="${e.name} restaurant">
            <h5 class="rating"><i class="fa-solid fa-star"></i> ${e.rating}</h5>
            <p class="desc">${e.description}</p>
            <h4 class="city"><i class="fa-solid fa-location-dot"></i> ${e.city}</h4>
        </div>
    `
    contentContainer.append(card);
});

const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

const navItems = document.querySelectorAll('.nav-menu > a')
navItems.forEach((e) => {
    e.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
})

const search = document.getElementById('search');
search.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const allRestoName = document.querySelectorAll('.card > div > .resto-name');
    for(const nameInput of allRestoName){
        if(nameInput.innerText.toLowerCase().includes(value)){
            nameInput.parentElement.parentElement.style.display = 'flex';
        }else{
            nameInput.parentElement.parentElement.style.display = 'none';
        }
    }
})

