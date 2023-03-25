import contactPage from "@/data/contactPage";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const { tagline, title, socials } = contactPage;

const inputs = ["name", "email", "message"];

const ContactPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: fullname,
        subject: "Upit sa sajta",
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    } else {
      window.alert("Poslo");
    }

    // const fromData = new FormData(e.target);
    // const data = {};
    // inputs.forEach((input) => (data[input] = fromData.get(input)));
    // console.log(data);
  };

  return (
    <section className='contact-page'>
      <Container>
        <Row>
          <Col xl={4} lg={5}>
            <div className='contact-page__left'>
              <div className='section-title text-left'>
                <span className='section-title__tagline'>{tagline}</span>
                <h2 className='section-title__title'>{title}</h2>
              </div>
              <div className='contact-page__social'>
                {socials.map(({ id, icon, href }) => (
                  <a href={href} key={id}>
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>
          <Col xl={8} lg={7}>
            <div className='contact-page__right'>
              <div className='comment-form'>
                <form
                  onSubmit={handleSubmit}
                  className='comment-one__form contact-form-validated'
                >
                  <Row>
                    <Col xl={6}>
                      <div className='comment-form__input-box'>
                        <input
                          type='text'
                          placeholder='Your name'
                          name='name'
                          onChange={(e) => setFullname(e.target.value)}
                          required
                        />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className='comment-form__input-box'>
                        <input
                          type='email'
                          placeholder='Email address'
                          name='email'
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12}>
                      <div className='comment-form__input-box'>
                        <textarea
                          name='message'
                          placeholder='Write Comment'
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <button
                        type='submit'
                        className='thm-btn comment-form__btn'
                      >
                        Send a message
                      </button>
                    </Col>
                  </Row>
                </form>
                <div className='result'></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
