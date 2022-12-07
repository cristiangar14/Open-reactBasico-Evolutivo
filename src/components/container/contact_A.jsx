import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponentB from '../pure/contact_B';


const ContactComponentA = () => {

    const defaultContact = new Contact('Cristian', 'Garzon', 'prueba@pruebas.com', false);

    return (
        <div>
            <ContactComponentB contact={defaultContact}></ContactComponentB>
        </div>
    );
};

export default ContactComponentA;
