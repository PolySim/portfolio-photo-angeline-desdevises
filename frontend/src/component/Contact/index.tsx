import React, { useRef } from "react";
import { ContactPage } from "src/styled";
import Share from "src/component/Share";
import emailjs from "emailjs-com";

export default function Contact(): JSX.Element {
  const ref: any = useRef(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_n0zq65b", ref.current, "Ppf7i87L4BsToMuJx")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    ref.current.reset();
  };

  return (
    <>
      <ContactPage>
        <div>
          <img src={require("./contact.jpg")} alt="Landscape" />
        </div>
        <div>
          <h2>Contact</h2>
          <p>
            Basé à Rennes, je suis disponible sur toute la France. I'm available
            for local projects as well as potential employment opportunities.
            Use the form to inquire about rates and availability, or just to say
            hi.
          </p>
          <div>
            <div>
              {/* <p>Phone</p>
              <p>06 99 05 69 30</p> */}
              <p>Email</p>
              <p>angeline.desdevises@gmail.com</p>
            </div>
            <div>
              <form ref={ref} onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="name" />
                <input type="text" placeholder="Email" name="email" />
                <div>
                  <textarea name="message" placeholder="Message" />
                </div>
              </form>
              <input type="submit" value="Send Message" onClick={sendEmail} />
            </div>
          </div>
        </div>
      </ContactPage>
      <Share footer={true} />
    </>
  );
}
