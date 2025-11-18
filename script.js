const quotes = [
  "Ich verzeihe allen gern ihre Fehler, nur mir nicht meine eigenen. ",
  "Mehr sein als scheinen. ",
  "Gebrauche dein Vermögen, aber missbrauche es nicht. ",
  " Gute Handlungen haften am besten im Gedächtnis, wenn man sie erneuert. ",
  "Der Krieg ernährt sich selbst.",
];

const btn = document.getElementById("catoQuoteBtn");
const display = document.getElementById("catoQuote");

btn.addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  display.textContent = randomQuote;
  display.style.display = "block";
});
