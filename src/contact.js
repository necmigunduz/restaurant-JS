function contact() {
    const contact_div = document.createElement('div');
    contact_div.setAttribute('class','flex-column');

    contact_div.innerHTML = `<span>To send your feedbacks about your experience in our restaurant:</span><span>myexperience@blueocean.com</span><span>For general information requests:</span><span>info@blueocean.com</span>`;

    return contact_div;
}

export default contact;
