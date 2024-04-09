function menuHeading() {
    const h1 = document.createElement('h1');
    h1.textContent = "Menu";
    return h1;
}

function createCard(foodName, foodImgURL, foodDescription, foodPrice ){
    const card = document.createElement('div');
    card.classList.add('card');

    const h3 = document.createElement('h3');
    h3.textContent = foodName;

    const img = document.createElement('img');
    img.src = foodImgURL;

    const paraForDescription = document.createElement('p');
    paraForDescription.textContent = foodDescription;

    const paraForPrice = document.createElement('p');
    paraForPrice.textContent = foodPrice;

    card.appendChild(h3);
    card.appendChild(img);
    card.appendChild(paraForDescription);
    card.appendChild(paraForPrice);

    return card;

}

export { menuHeading, createCard };