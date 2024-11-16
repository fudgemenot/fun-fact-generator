document.getElementById('generateFact').addEventListener('click', function() {
    const facts = [
        "Nature enthusiast with a passion for exploring parks, mountains, and beaches.",
        "Enjoys the beauty and activities of snowy landscapes.",
        "Adventurous spirit eager to discover new experiences."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    const funFactElement = document.getElementById('funFact');
    funFactElement.textContent = randomFact;
});
