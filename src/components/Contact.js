import React from "react";
import { Icon } from "semantic-ui-react";

import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const img_contact_main = require("../assets/images/different/contact.group.webp");
const CONTACT_EMAIL = "guidebelarus@yandex.by";

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
        <div className="contact-wrapper contact-wrapper--single">
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
                  <a className="contact-info-row__value" href="tel:+375297697529">
                    +375-29-7697529
                  </a>
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
                  <a className="contact-info-row__value" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
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
