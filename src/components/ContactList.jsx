import React, { useEffect } from "react";
import { useContactContext } from "../contexts/ContactContext";
import ContactItem from "./ContactItem";
import { ListGroup } from "react-bootstrap";

const ContactList = () => {
  const { contact, getContact } = useContactContext();
  useEffect(() => {
    getContact();
  }, []);
  return (
    <div className="text-center">
      <h1>Contact Book</h1>
      <ListGroup>
        {contact.map((item) => (
          <ContactItem key={item.key} item={item} />
        ))}
      </ListGroup>
    </div>
  );
};

export default ContactList;
