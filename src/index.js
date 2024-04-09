import { headingOneElement, paraElement } from './home.js';
import { menuHeading, createCard } from './menu.js';
import { contactHeading, createContactContainer } from './contact.js';
import foodOne from './foodOne.jpg';
import foodTwo from './foodTwo.jpg';
import foodThree from './foodThree.jpg';
import foodFour from './foodFour.jpg';

import './style.css';

function homePage() {
    const content = document.getElementById('content');

    const h1 = headingOneElement();
    content.appendChild(h1);
    
    const para = paraElement();
    content.appendChild(para);

    return content;
    
}
 
document.body.appendChild(homePage());

const content = document.getElementById('content');

const homePageButton = document.querySelector('#home');
homePageButton.addEventListener('click',() => {
    content.innerHTML = "";
    document.body.appendChild(homePage());
});

const menuPageButton = document.querySelector('#menu');
menuPageButton.addEventListener('click', () => {
    content.innerHTML = "";

    const menu = menuHeading();
    content.appendChild(menu);

    const foodCardOne = createCard('Grilled kebab with fried peta', foodOne, 'Grilled beef flavor kebab with a pinch of a lemon and a friend peta', 'Price: $$');
    const foodCardTwo = createCard('Kibbeh', foodTwo, 'kibbeh is made by pounding bulgur wheat together with meat into a fine paste and forming it into ovoid shapes, with toasted pine nuts and spices.', 'Price: $$');
    const foodCardThree = createCard('Kabsa', foodThree, 'These dish usually made with rice (usually basmati), meat, vegetables, and a mixture of spices.', 'Price: $$');
    const foodCardFour = createCard('Mujaddara', foodFour, 'A dish consisting of cooked lentils together with groats, generally rice, and garnished with sautéed onions', 'Price: $$');

    content.appendChild(foodCardOne);
    content.appendChild(foodCardTwo);
    content.appendChild(foodCardThree);
    content.appendChild(foodCardFour);

    document.body.appendChild(content);
});

const contactPageButton = document.querySelector('#contact');
contactPageButton.addEventListener('click', () => {
    content.innerHTML = "";

    const div = document.createElement('div');
    div.classList.add('contact-container');

    const contact = contactHeading();
    content.appendChild(contact);

    const ownerEmail = createContactContainer('Example123@gmail.com');
    const ownerLocation = createContactContainer('123 Street Brgy.Example City Country');
    const ownerPhoneNumber = createContactContainer('(+63)912-345-6789');

  
    div.appendChild(ownerEmail);
    div.appendChild(ownerLocation);
    div.appendChild(ownerPhoneNumber);

    content.appendChild(div);

    document.body.appendChild(content);
});