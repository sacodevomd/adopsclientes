import React from 'react';
import ReactNotifications from 'react-browser-notifications';
 
class Alert extends React.Component {
  constructor() {
    super();
    this.showNotifications = this.showNotifications.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
 
  showNotifications() {
    // If the Notifications API is supported by the browser
    // then show the notification
    if(this.n.supported()) this.n.show();
  }
 
  handleClick(event) {
    // Do something here such as
    // console.log("Notification Clicked") OR
    // window.focus() OR
    window.open("https://annalectbox.com.gt/AdOps/ErroresPlataformas/")
 
    // Lastly, Close the notification
   
  }
 
  render() {
    return (
      <div>
 
        <ReactNotifications
          onRef={ref => (this.n = ref)} // Required
          title="Advertencia de Errores" // Required
          body="Se han detectado nuevos errores en plataformas"
          icon="https://annalectbox.com.gt/AdOps/ErroresPlataformas/img/icon/logoalert.png"
          tag="Error"
          timeout="10000"
          onClick={event => this.handleClick(event)}
        />
        <button onClick={this.showNotifications} id="errordesplegable" hidden>
          Notify Me!
        </button>
      </div>
    )
  }
}
export default Alert;