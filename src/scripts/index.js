import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../public/data/data.js'

const contentContainer = document.getElementById('content-container');

data.forEach((e) => {
    console.log(e);
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div>
            <h3 class="resto-name">${e.name}</h3>
            <img src="${e.pictureId}" alt="">
            <h5 class="rating"><i class="fa-solid fa-star"></i> ${e.rating}</h5>
            <p class="desc">${e.description}</p>
            <h4 class="city"><i class="fa-solid fa-location-dot"></i> ${e.city}</h4>
        </div>
    `
    contentContainer.append(card);
});

