import React, { PropTypes } from 'react';
import OwnerPropertyDetailsForm from '../components/OwnerPropertyDetailsForm.jsx';
import axios from 'axios';
// import { Redirect } from 'react-router';
// import { Router } from 'react-router';
import { browserHistory } from 'history';
// import { Link } from 'react-router'; 
class OwnerPropertyDetailsPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    var self = this;
    event.preventDefault();
    axios.post('/auth/OwnerPropertyDetails', {
      user : this.state.user
    })
    .then(function (res) {
      // window.location.href="/thankyou"
      console.log('res => ',res);
      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        self.setState({
         errors: res.data.errors
        });
      } else {
        //if success
        // TO-DO need to check and route the role
        const user = res.data.user;
        const type = user.UserType;
        const username = user.Username;
        self.setState({redirect:true});
        console.log('self.props => ',self.props);
        if (type == "OWNER") {
        }  
      }
    })
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
        return (
      <OwnerPropertyDetailsForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default OwnerPropertyDetailsPage;
