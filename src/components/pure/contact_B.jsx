import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponentB = ({ contact }) => {

  return (
    <div>
      <h2>Nombre: { contact.name } { contact.surname }</h2>
      <h4>Email: { contact.email }</h4>
      <h5>Contacto { contact.conected ? 'En Línea': 'No Disponible'}</h5>
    </div>
  );
};

ContactComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponentB;
