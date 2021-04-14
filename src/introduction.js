function Introduction() {
  const introText = 'We serve a constantly rotating selection of seasonal delights, including lobster and Alaskan king crab, to name a few. We’ve worked hard to develop close relationships with our suppliers, from small, family-owned companies in the Mediterranean, to independent fishermen right here in Florida, to ensure you the exceptional quality you desire.';

  const introDiv = document.createElement('div');
  introDiv.setAttribute('class', 'intro');

  const pIntro = document.createElement('p');
  pIntro.setAttribute('class', 'intro');
  pIntro.innerText = introText;

  introDiv.appendChild(pIntro);

  return introDiv;
}

export default Introduction;
