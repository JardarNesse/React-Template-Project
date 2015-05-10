var Actions = require('../actions/actions');

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
  receivePuzzleData: function() {
    var data = JSON.parse(localStorage.getItem('Puzzle'));
    Actions.receivePuzzleData(data);
  }
};