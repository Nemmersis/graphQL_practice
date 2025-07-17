let games = [
  {id: '1', title: 'Resident Evil: Village', platform:['PS5', 'PC', 'Xbox']},
  {id: '2', title: 'The Witcher 3: Wild Hunt', platform:['PS5', 'PC', 'XBOX', 'Switch']},
  {id: '3', title: 'Fable 2', platform:['Xbox']},
  {id: '4', title: 'Tavern Talk', platform:['Switch', 'PC']},
  {id: '5', title: 'Bloodborne', platform:['PS5']},
]

let authors = [
  {id: '1', name: 'Nemmer', verified: true},
  {id: '2', name: 'Danni', verified: false},
  {id: '3', name: 'Nell', verified: true},
  {id: '4', name: 'St Jay', verified: false},
]

let reviews = [
  {id: '1', rating: 10, content: 'I LOVE Village!', author_id: '1', game_id: '1'},
  {id:'2', rating: 9, content: 'One of my favourite games', author_id: '2', game_id:'3'},
  {id:'3', rating: 6, content: 'Great start. Can\'t wait for the updates', author_id: '3', game_id: '4'},
  {id:'4', rating: 5, content: 'Repetetive, frustrating, Nem dies a lot, lol', author_id: '4', game_id: '5'},
  {id:'5', rating: 8, content: 'The world is amazing, but can be hard to remember controls', author_id: '2', game_id: '2'},
  {id:'6', rating: 8, content: 'Nem made me play this...its surprisingly good!', author_id: '4', game_id: '1'},
  {id:'7', rating: 6, content: 'Not really my thing, but I can see why people love it', author_id: '3', game_id: '2'},
  {id:'8', rating: 8, content: 'WHY ARE THERE EYEBALLS ALL OVER????', author_id: '1', game_id: '5'},
  {id:'9', rating: 7, content: 'Rich story and a lot of inspiration from folklore', author_id: '3', game_id: '1'},
]

export default { games, authors, reviews }