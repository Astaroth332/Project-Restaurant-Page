function headingOneElement() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Flourish With Gratitude';
    return h1;
}

function paraElement() {
    const para = document.createElement('p');
    para.textContent = 'Halal food menu with good costumer service';
    return para;
}

export { headingOneElement, paraElement };