var React = require('react');
var DB = require('./DB');
var PuzzleAPI = require('./utils/PuzzleAPI')
var PuzzleApp = require('./components/PuzzleApp.react');

// Load Mock Puzzle Data into localStorage
DB.init();

// Load Mock API Call
PuzzleAPI.receivePuzzleData();

// Render App Controller View
React.render(
  <PuzzleApp />,
  document.getElementById('puzzle-app')
);