var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/AppConstants');

// Define action methods 
var Actions = {

  setContactInfo: function(data) {
    AppDispatcher.handleAction({
      actionType: Constants.SET_CHECKOUT_DATA,
      data: data
    })
  },
 
  receivePuzzleData: function(data) {
    AppDispatcher.handleAction({
      actionType: Constants.RECEIVE_DATA,
      data: data
    })
  }

};


module.exports = Actions;