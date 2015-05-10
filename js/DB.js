module.exports = {
  // Load Mock Puzzle Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('Puzzle', JSON.stringify([
      {
        id: '0000001',
        name: 'Spørsmål',
        image: 'Matrix.png',
        description: 'Her har du en liten nøtt',
        variants: [
          {
            id: '1',
            gruppe: 'Farger',
            verdi: 'rød'
          },
          {
            id: '2',
            gruppe: 'Farger',
            verdi: 'blå'
          }
        ]
      }
    ]));
  }
};