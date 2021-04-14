function Introduction() {
    const intro_text = "We serve a constantly rotating selection of seasonal delights, including lobster and Alaskan king crab, to name a few. We’ve worked hard to develop close relationships with our suppliers, from small, family-owned companies in the Mediterranean, to independent fishermen right here in Florida, to ensure you the exceptional quality you desire."

    const intro_div = document.createElement('div');
    intro_div.setAttribute('class', 'intro');

    const p_intro = document.createElement('p');
    p_intro.setAttribute('class', 'intro');
    p_intro.innerText = intro_text;

    intro_div.appendChild(p_intro);

    return intro_div;
}

export default Introduction;
