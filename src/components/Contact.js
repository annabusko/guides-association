import React, { useState } from "react";
import {
  Form,
  TextArea,
  Button,
  Dimmer,
  Header,
  Icon,
} from "semantic-ui-react";

import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const img_contact_main = require("../assets/images/different/contact.group.jpg");

const requiredMark = (key, t) => (
  <>
    {t(key)} <span className="contact-form__req">*</span>
  </>
);

function ContactForm() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (_, data = {}) => {
    const { name: fieldName, value } = data;
    if (!fieldName) return;
    if (fieldName === "name") setName(value);
    if (fieldName === "email") setEmail(value);
    if (fieldName === "message") setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateId = "template_cehjwdNW";
    const service_id = "default_service";
    const template_params = {
      from_name: name,
      reply_to: email,
      message_html: message,
    };

    window.emailjs
      .send(service_id, templateId, template_params)
      .then(handleSuccess)
      .catch((error) => alert(error));
  };

  const handleSuccess = () => {
    setName("");
    setEmail("");
    setMessage("");
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="contact-card contact-card--form">
      <div className="contact-card__head">
        <Icon name="mail outline" className="contact-card__head-icon" />
        <h2 className="contact-card__title">{t("contact_write_title")}</h2>
      </div>
      <Form className="contact-form" onSubmit={handleSubmit}>
        <Form.Input
          label={requiredMark("contact_form_name", t)}
          placeholder={t("contact_placeholder_name")}
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <Form.Input
          label={
            <>
              {t("contact_form_email")}{" "}
              <span className="contact-form__req">*</span>
            </>
          }
          placeholder={t("contact_placeholder_email")}
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        <Form.Field
          control={TextArea}
          name="message"
          label={requiredMark("contact_form_message", t)}
          placeholder={t("contact_placeholder_message")}
          onChange={handleChange}
          required
          value={message}
        />
        <Button type="submit" className="contact-button" name="submit">
          {t("contact_form_send_full")}
        </Button>
      </Form>
      <p className="contact-card__hint">{t("contact_reply_hint")}</p>

      <Dimmer active={showModal} onClickOutside={closeModal} page>
        <Header as="h2" icon inverted>
          <Icon name="heart" />
          Your Message Has Been Sent!
          <Header.Subheader>Click anywhere to close </Header.Subheader>
        </Header>
      </Dimmer>
    </div>
  );
}

const ContactBlock = () => {
  const { t } = useTranslation();
  return (
    <section className="block contact-page">
      <div>
        <div
          className="content-main-image"
          style={{ background: `url(${img_contact_main})` }}
        >
            <div>
              <h1>{t("menu_contact")}</h1>
            </div>
        </div>
        <div className="block-wrapper contact-wrapper">
          <ContactForm />
          <div className="contact-card contact-card--info">
            <div className="contact-card__head">
              <Icon name="phone" className="contact-card__head-icon" />
              <h2 className="contact-card__title">{t("contact_info_title")}</h2>
            </div>
            <ul className="contact-info-list">
              <li className="contact-info-row">
                <div className="contact-info-row__icon" aria-hidden>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="contact-info-row__body">
                  <strong className="contact-info-row__label">
                    {t("contact_label_address")}
                  </strong>
                  <span className="contact-info-row__value">{t("adress")}</span>
                </div>
              </li>
              <li className="contact-info-row">
                <div className="contact-info-row__icon" aria-hidden>
                  <FontAwesomeIcon icon={faMobileAlt} />
                </div>
                <div className="contact-info-row__body">
                  <strong className="contact-info-row__label">
                    {t("contact_label_phone")}
                  </strong>
                  <span className="contact-info-row__value">
                    +375-29-7697529
                  </span>
                </div>
              </li>
              <li className="contact-info-row">
                <div className="contact-info-row__icon" aria-hidden>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="contact-info-row__body">
                  <strong className="contact-info-row__label">
                    {t("contact_label_email_row")}
                  </strong>
                  <span className="contact-info-row__value">
                    guidebelarus@yandex.by
                  </span>
                </div>
              </li>
              <li className="contact-info-row">
                <div className="contact-info-row__icon" aria-hidden>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <div className="contact-info-row__body">
                  <strong className="contact-info-row__label">
                    {t("contact_label_hours")}
                  </strong>
                  <span className="contact-info-row__value">
                    {t("contact_hours_time")}
                    <br />
                    {t("contact_hours_days")}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
