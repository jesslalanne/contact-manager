import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
      default: 
        return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Jessica Lalanne",
        email: "jessica.lalanne@gmail.com",
        phone: "06 49 39 79 13"
      },
      {
        id: 2,
        name: "Yiskah Teixeira",
        email: "yiskah.teixeira@gmail.com",
        phone: "06 98 76 54 32"
      },
      {
        id: 3,
        name: "Bree Vandekamp",
        email: "bree.vandekamp@gmail.com",
        phone: "06 12 34 56 78"
      }
    ],
    dispatch: action => this.setState(state => reducer(state,action))
    };


  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;
