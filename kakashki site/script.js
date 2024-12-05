const facts = [
  "Собаки иногда используют какашки, чтобы обозначить свою территорию.",
  "Некоторые насекомые используют какашки как защитный механизм.",
  "Летучие мыши какают в полёте, чтобы не тратить время!",
  "Пингвины могут стрелять какашками на расстояние до 1 метра.",
  "Есть вид грибов, который растёт на коровьих какашках."
];

document.getElementById('funButton').addEventListener('click', () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('funFact').innerText = randomFact;
});
