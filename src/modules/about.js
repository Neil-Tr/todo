function loadAbout() {
    const cont = document.getElementById('content');
    const about = document.createElement('div');
    about.className = 'about';
    about.textContent = 'About';
    const aboutText = document.createElement('p');
    aboutText.className = 'about-text';
    aboutText.textContent = 'Welcome to Doughnut Worry, Be Happy - where calories are imaginary, sprinkles are mandatory, and every doughnut is a round trip to joy! We believe in glazing over your worries and filling your day with hole-hearted happiness. Come for the doughnuts, stay because you can\'t leave without a smile!';

    cont.appendChild(about);
    about.appendChild(aboutText);

}


export default loadAbout;