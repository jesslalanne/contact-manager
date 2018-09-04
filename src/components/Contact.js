import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    shownContactInfo: true
  };

  onShowClick = e => {
    this.setState({
      shownContactInfo: !this.state.shownContactInfo
    });
  };

  onDeleteClick = () => {
      this.props.deleteClickHandler();
  }

  render() {
    const { name, email, phone } = this.props.contact;
    const { shownContactInfo} = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i onClick={this.onShowClick} className="fas fa-sort-down" style={{cursor: "pointer"}}/>
          <i className="fas fa-times" style={{cursor: "pointer", float: "right", color: "red"}}
          onClick={this.onDeleteClick}
          ></i>
        </h4>
        {shownContactInfo ? (<ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>) : null }
        
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
