import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../Context";

class Contact extends Component {
  state = {
    shownContactInfo: true
  };

  onShowClick = e => {
    this.setState({
      shownContactInfo: !this.state.shownContactInfo
    });
  };

  onDeleteClick = (id, dispatch) => {
      dispatch({type: 'DELETE_CONTACT', payload: id})
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { shownContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
            const { dispatch} = value
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                {""}
                <i onClick={this.onShowClick} className="fas fa-sort-down" style={{ cursor: "pointer" }} />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this,id,dispatch)}
                />
              </h4>
              {shownContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
