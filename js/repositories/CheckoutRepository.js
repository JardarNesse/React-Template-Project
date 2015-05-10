// sort of model
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/AppConstants');
var _ = require('underscore');

// Define initial data points
var contactInfoVisible = true;
var entity = {
      firstName: '',
      lastName: '',
      address: '',
      mobile: '',
      email: ''
    };

function toggleVisability(data){
  contactInfoVisible = !contactInfoVisible;
}

function setCheckoutData(data){

  switch(data.name){
    case 'firstName':
      entity.firstName = data.value;
      break;
     case ('lastName'):
      entity.lastName = data.value;
      break;
     case ('address'):
      entity.address = data.value;
      break;
     case ('mobile'):
      entity.mobile = data.value;
      break;
     case ('email'):
      entity.email = data.value;
      break;                  
  }
}

// Extend CheckoutRepository with EventEmitter to add eventing capabilities
var CheckoutRepository = _.extend({}, EventEmitter.prototype, {

 // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  getContactInfoVisible: function() {
    return contactInfoVisible;
  },

  getContactInformation: function(){
      return entity;
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {

  if(payload.action.actionType === Constants.SET_CHECKOUT_DATA){
    setCheckoutData(payload.action.data);   
  }

  // If action was responded to, emit change event
  CheckoutRepository.emitChange();
  
  return true;
});

module.exports = CheckoutRepository;
