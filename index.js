const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
const suits = ['clubs', 'diamonds', 'hearts', 'spades']

const cards = []
for (const suit of suits) {
  for (const rank of ranks) {
    cards.push(`<div class="card">
    <div class="card__inner">
      <div class="card__front">
        <div class="number ${suit}">${rank}</div>
        <div class="suit"><img src="images/${suit}.png"></div>
        <div class="number ${suit}">${rank}</div>
      </div>
      <div class="card__back"></div>
    </div>
  </div>`)
  }
}

document.getElementById('deck').innerHTML += cards.join('\n')

document.getElementById('deck').addEventListener('click', function (event) {
  if (event.target.closest('.card')) {
    event.target.closest('.card').classList.toggle('flipped')
  }
})
