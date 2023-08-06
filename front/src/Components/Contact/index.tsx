import {
  Available,
  ContactForm,
  ContactStyle,
  Email,
} from "@/Components/Contact/styled.ts";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const KEY = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;

export default function Contact(): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = formRef.current;

    if (formElement) {
      emailjs
        .sendForm("service_qwoeqx5", "template_n0zq65b", formElement, KEY)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        );
      formElement.reset();
    }
  };

  return (
    <ContactStyle>
      <div>
        <img
          onContextMenu={(e) => e.preventDefault()}
          src="/static/contact.jpg"
          alt="Landscape"
        />
      </div>
      <Available>
        <h2>Contact</h2>
        <p>
          Basée à Rennes, je suis disponible sur toute la France. I'm available
          for local projects as well as potential employment opportunities. Use
          the form to inquire about rates and availability, or just to say hi.
        </p>
      </Available>
      <Email>
        <div>
          <h5>Email</h5>
          <p>angeline.desdevises@gmail.com</p>
        </div>
        <ContactForm onSubmit={handleSubmit} ref={formRef}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
          <div>
            <textarea name="message" placeholder="Message" />
          </div>
          <input type="submit" value="Send Message" />
        </ContactForm>
      </Email>
    </ContactStyle>
  );
}
