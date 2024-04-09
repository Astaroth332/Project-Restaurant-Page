function contactHeading() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact';
    return h1;
}

function createContactContainer(ownerInformation) {

    const contactCard = document.createElement('div');
    contactCard.classList.add('contact-card');

    const address = document.createElement('address');
    address.textContent = ownerInformation;


    contactCard.appendChild(address);

    return contactCard;
}

export { contactHeading, createContactContainer };