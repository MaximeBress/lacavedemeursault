import { ContactFormData } from '@/app/typing/contact';

export function sendEmail(data: ContactFormData) {
  const apiEndpoint = '/api/send-email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((response) => {
      alert('Votre message a bien été envoyé');
    })
    .catch((err) => {
      alert(err);
    });
}
