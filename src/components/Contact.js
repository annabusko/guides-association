import React, { Component } from "react";
import { Form, TextArea, Button, Dimmer, Header, Icon } from 'semantic-ui-react';

import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMobileAlt, faEnvelope, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const img_contact_main = require('../assets/images/different/contact.group.jpg');

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            showModal: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    };

    handleSubmit = event => {
        event.preventDefault();

        const templateId = 'template_cehjwdNW';
        const service_id = "default_service";
        var template_params = {
            "from_name": this.state.name,
            "reply_to": this.state.email,
            "message_html": this.state.message
        }

        window.emailjs.send(
            service_id, templateId,
            template_params
        ).then(this.handleSuccess)
            .catch(error => alert(error));
    }


    handleSuccess = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
            showModal: true,
        })
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        const { name, message, button } = this.props;
        return (
            <div>
                <Form size="huge" className="contact-form" onSubmit={this.handleSubmit}>
                    <Form.Input
                        label={name}
                        placeholder={name}
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                    <Form.Input
                        label='Email'
                        placeholder='your_adress@gmail.com'
                        name='email'
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={TextArea}
                        label={message}
                        placeholder={message}
                        onChange={this.handleChange}
                        required
                        value={this.state.message}
                        name="message"
                    />
                    <Button type="submit" size='huge' className="contact-button" name="submit" >{button}</Button>
                </Form>

                <Dimmer active={this.state.showModal} onClickOutside={this.closeModal} page>
                    <Header as='h2' icon inverted>
                        <Icon name='heart' />
                        Your Message Has Been Sent!
                        <Header.Subheader>Click anywhere to close </Header.Subheader>
                    </Header>
                </Dimmer>
            </div>
        )
    }
}

const ContactBlock = () => {
    const { t } = useTranslation();
    return (<section className="block">
        <div>
            <div className="content-main-image"
                style={{
                    background: `url(${img_contact_main})`
                }} >
                <div><h1>{t('menu_contact')}</h1></div>
            </div>
            <div className="block-wrapper contact-wrapper">
                <ContactForm name={t('contact_form_name')} message={t('contact_form_message')} button={t('contact_form_send')} />
                <div className="adress-wrapper">
                    <span><FontAwesomeIcon icon={faMapMarkerAlt} size="3x" /> {t('adress')}</span>
                    <span><FontAwesomeIcon icon={faMobileAlt} size="3x" /> +375-29-7697529</span>
                    <span><FontAwesomeIcon icon={faEnvelope} size="3x" /> guidebelarus@yandex.by</span>
                    <span><FontAwesomeIcon icon={faCalendarAlt} size="3x" /> 9.00-17.00</span>
                </div>
            </div>
        </div>
    </section>
    )
};

export default ContactBlock;