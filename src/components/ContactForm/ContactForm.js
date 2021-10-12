import { useState, useEffect } from "react";
import Contacts from "./Contact";
import { Card } from "react-bootstrap";

function ContactForm() {
  const [contactList, setContactList] = useState([]);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (localStorage.getItem("contactList")) {
      setContactList(JSON.parse(localStorage.getItem("contactList")));
    }
  }, []);

  // console.log({contactList})

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [contactList]);

  // console.log({contactList})

  function handleSubmit(e) {
    e.preventDefault();

    const contact = {
      first,
      last,
      address,
      phone,
    };

    setContactList([...contactList, contact]);

    setFirst("");
    setLast("");
    setAddress("");
    setPhone("");
  }

  function handleFirstNameChange(e) {
    setFirst(e.target.value);
  }
  function handleLastNameChange(e) {
    setLast(e.target.value);
  }
  function handleAddressChange(e) {
    setAddress(e.target.value);
  }
  function handlePhoneNumChange(e) {
    setPhone(e.target.value);
  }

  const contactsHTML = contactList.map((contact) => (
    <Contacts key={contact.phone} {...contact} />
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 htmlFor="contact-input">
          <label>Contact Form</label>
        </h2>
        <input
          value={first}
          name="first-name"
          onChange={handleFirstNameChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={last}
          name="last-name"
          onChange={handleLastNameChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={address}
          name="address-input"
          onChange={handleAddressChange}
          type="text"
          placeholder="Address"
        />
        <input
          value={phone}
          name="tel-input"
          onChange={handlePhoneNumChange}
          type="tel"
          placeholder="Phone"
        />
        <button type="submit">Submit</button>
      </form>
      {contactsHTML}
    </div>
  );
}

export default ContactForm;
