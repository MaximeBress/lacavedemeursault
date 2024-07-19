import * as React from 'react';

type Props = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export const ContactEmail: React.FC<Readonly<Props>> = ({ name, phone, email, message }) => (
  <div>
    <h3>Vous avez un nouveau message provenant du formulaire de contact de la cave de meursault</h3>
    <p>{`Nom: ${name}`}</p>
    <p>{`Téléphone: ${phone}`}</p>
    <p>{`Email: ${email}`}</p>
    <p dangerouslySetInnerHTML={{ __html: message }} />
  </div>
);
