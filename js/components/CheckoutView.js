// view

var React = require('react');

var CheckoutView = React.createClass({

  render: function() {

    var contactInfo = this.props.contactInfo;
    if (!contactInfo.firstName.length > 0){return false;}
    
    return (
     <div className={"checkout-view"}>
        <div>
          <h1>Kontaktinformasjon</h1>
          { contactInfo.firstName ? 'Fornavn: ' + contactInfo.firstName : null}<br/>
          { contactInfo.lastName ? 'Etternavn: ' + contactInfo.lastName : null} <br/>
          { contactInfo.address ? 'Adresse: ' + contactInfo.address : null} <br/>
          { contactInfo.mobile ? 'Mobiltelefon: ' + contactInfo.mobile : null} <br/>
          { contactInfo.email ? 'E-post: ' + contactInfo.email : null} 
        </div>
    </div>
    );
  },

});

module.exports = CheckoutView;