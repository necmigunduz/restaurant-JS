function Contact() {
  const contactDiv = document.createElement('div');
  contactDiv.setAttribute('class', 'flex-column, contact');

  contactDiv.innerHTML = '<span><strong>To send your feedbacks about your experience in our restaurant: </strong></span><br /><br><span>myexperience@blueocean.com</span><br /><br><span><strong>For general information requests: </strong></span><br /><br><span>info@blueocean.com</span>';

  return contactDiv;
}

export default Contact;
