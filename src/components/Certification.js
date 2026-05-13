import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

import AboutBlock from './About';
import { useTranslation } from "react-i18next";

import act1 from "../assets/documents/act895.pdf";
import act2 from "../assets/documents/act507.pdf";
import note from "../assets/documents/note.pdf";

const img_training_main = {
    url: require('../assets/images/different/training.group.jpg')
};

const img_exam_small = {
    src: require('../assets/images/different/exam.jpg'),
    alt: ""
};

const Title = () => {
    const { t } = useTranslation();
    return <h1>{t('menu_trainings')}</h1>;
}

const CertificationBlock = () => {
    const { t } = useTranslation();

    return (
            <AboutBlock image_main={img_training_main} image_small={img_exam_small} title={<Title />}>
                <h2>{t('menu_certification')}</h2>
                <p>{t('trainings_certification1')}</p>
                <p>{t('trainings_certification2')}</p>
                <p>{t('trainings_certification3')}</p>
                <div className="button-group">
                    <Button.Group  size="massive" vertical >
                        <Button animated='fade' size='large' as='a'
                            href={act1}
                            target="_blank">
                            <Button.Content visible>{t('trainings_certification_pdf1')}</Button.Content>
                            <Button.Content hidden> <Icon name='down arrow' />{t('application_download')}</Button.Content>
                        </Button>
                      
                        <Button animated='fade' color="grey" size='large' as='a'
                            href={act2}
                            target="_blank">
                            <Button.Content visible>{t('trainings_certification_pdf2')}</Button.Content>
                            <Button.Content hidden> <Icon name='down arrow' />{t('application_download')}</Button.Content>
                        </Button>
                        
                        <Button animated='fade' size='large' as='a'
                            href={note}
                            target="_blank">
                            <Button.Content visible>{t('trainings_certification_pdf3')}</Button.Content>
                            <Button.Content hidden> <Icon name='down arrow' />{t('application_download')}</Button.Content>
                        </Button>
                    </Button.Group>
                </div>
            </AboutBlock>
    )
};



export default CertificationBlock;