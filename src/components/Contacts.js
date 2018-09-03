import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
      ]
    };
  
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact}/>
        ))}
      </div>
    );
  }
}

export default Contacts;
