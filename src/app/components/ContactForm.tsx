'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { ContactFormData } from '@/app/typing/contact';

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((response) => {
        toast.success('Votre message a bien été envoyé !', {
          position: 'bottom-left'
        });
        reset({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      })
      .catch((err) => {
        toast.error("Il y'a eu une erreur lors de l'envoi du message !", {
          position: 'bottom-left'
        });
      });
  };

  return (
    <form className="contact-form needs-validation" onSubmit={handleSubmit(onSubmit)}>
      <div className="messages"></div>
      <div className="form-floating relative !mb-4">
        <input
          id="form_name2"
          type="text"
          className="form-control relative m-0 block h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] w-full rounded-[0.4rem] border border-solid border-[rgba(8,60,130,0.07)] bg-[#fefefe] bg-clip-padding p-[.6rem_1rem] !pr-9 text-[.75rem] font-medium leading-[1.25] text-[#60697b] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] transition-[border-color] duration-[0.15s] ease-in-out placeholder:text-[#959ca9] placeholder:opacity-100 focus:!border-[rgba(63,120,224,0.5)] focus:bg-[rgba(255,255,255,.03)] focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0"
          placeholder="Votre nom"
          {...register('name', { required: true })}
        />
        <label
          htmlFor="form_name2"
          className="pointer-events-none absolute left-0 top-0 z-[2] mb-2 inline-block h-full origin-[0_0] overflow-hidden text-ellipsis whitespace-nowrap border border-solid border-transparent px-4 py-[0.6rem] text-start font-Manrope text-[.75rem] text-[#959ca9]"
        >
          Nom *
        </label>
      </div>
      <div className="form-floating relative !mb-4">
        <input
          id="form_name2"
          type="text"
          className="form-control relative m-0 block h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] w-full rounded-[0.4rem] border border-solid border-[rgba(8,60,130,0.07)] bg-[#fefefe] bg-clip-padding p-[.6rem_1rem] !pr-9 text-[.75rem] font-medium leading-[1.25] text-[#60697b] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] transition-[border-color] duration-[0.15s] ease-in-out placeholder:text-[#959ca9] placeholder:opacity-100 focus:!border-[rgba(63,120,224,0.5)] focus:bg-[rgba(255,255,255,.03)] focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0"
          placeholder="Votre numéro de téléphone"
          {...register('phone', { required: true })}
        />
        <label
          htmlFor="form_name2"
          className="pointer-events-none absolute left-0 top-0 z-[2] mb-2 inline-block h-full origin-[0_0] overflow-hidden text-ellipsis whitespace-nowrap border border-solid border-transparent px-4 py-[0.6rem] text-start font-Manrope text-[.75rem] text-[#959ca9]"
        >
          Téléphone *
        </label>
      </div>
      <div className="form-floating relative !mb-4">
        <input
          id="form_email2"
          type="email"
          className="form-control relative m-0 block h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] w-full rounded-[0.4rem] border border-solid border-[rgba(8,60,130,0.07)] bg-[#fefefe] bg-clip-padding p-[.6rem_1rem] !pr-9 text-[.75rem] font-medium leading-[1.25] text-[#60697b] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] transition-[border-color] duration-[0.15s] ease-in-out placeholder:text-[#959ca9] placeholder:opacity-100 focus:!border-[rgba(63,120,224,0.5)] focus:bg-[rgba(255,255,255,.03)] focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0"
          placeholder="jane.doe@example.com"
          {...register('email', { required: true })}
        />
        <label
          htmlFor="form_email2"
          className="pointer-events-none absolute left-0 top-0 z-[2] mb-2 inline-block h-full origin-[0_0] overflow-hidden text-ellipsis whitespace-nowrap border border-solid border-transparent px-4 py-[0.6rem] text-start font-Manrope text-[.75rem] text-[#959ca9]"
        >
          Email *
        </label>
      </div>
      <div className="form-floating relative !mb-4">
        <textarea
          id="form_message2"
          className="form-control relative m-0 block h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] w-full rounded-[0.4rem] border border-solid border-[rgba(8,60,130,0.07)] bg-[#fefefe] bg-clip-padding p-[.6rem_1rem] !pr-9 text-[.75rem] font-medium leading-[1.25] text-[#60697b] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] transition-[border-color] duration-[0.15s] ease-in-out placeholder:text-[#959ca9] placeholder:opacity-100 focus:!border-[rgba(63,120,224,0.5)] focus:bg-[rgba(255,255,255,.03)] focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0"
          placeholder="Votre message"
          style={{ height: '150px' }}
          {...register('message', { required: true })}
        ></textarea>
        <label
          htmlFor="form_message2"
          className="pointer-events-none absolute left-0 top-0 z-[2] mb-2 inline-block h-full origin-[0_0] overflow-hidden text-ellipsis whitespace-nowrap border border-solid border-transparent px-4 py-[0.6rem] text-start font-Manrope text-[.75rem] text-[#959ca9]"
        >
          Message *
        </label>
      </div>
      <button className="btn btn-outline-primary-dark !mb-3 cursor-pointer !rounded-[50rem]">Envoyer</button>
      <p className="text-[#aab0bc]">
        <strong>*</strong> Ces champs sont obligatoires
      </p>
    </form>
  );
};

export default ContactForm;
