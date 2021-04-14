function Contact() {
    const contact_div = document.createElement('div');
    contact_div.setAttribute('class','flex-column, contact');

    contact_div.innerHTML = `<span><strong>To send your feedbacks about your experience in our restaurant: </strong></span><br /><br><span>myexperience@blueocean.com</span><br /><br><span><strong>For general information requests: </strong></span><br /><br><span>info@blueocean.com</span>`;

    return contact_div;
}

export default Contact;
