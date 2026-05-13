import React from 'react';
import { Image } from 'semantic-ui-react';

import { useTranslation } from "react-i18next";
import person1 from '../assets/images/people/person1.jpg';
import person2 from '../assets/images/people/person2.jpg';
import person3 from '../assets/images/people/person3.jpg';
import person4 from '../assets/images/people/person4.jpg';
import person5 from '../assets/images/people/person5.jpg';
import person6 from '../assets/images/people/person6.jpg';
import person7 from '../assets/images/people/person7.jpg';
import person8 from '../assets/images/people/person8.jpg';

const AboutBlock = () => {
    const { t } = useTranslation();
    return (
        <div className="block-wrapper">
            <h2>{t('about_header')}</h2>
            <div className=" block-grid about-grid">
                <div className="about-column">
                    <Image src={person1} size='small' circular centered />
                    <div>
                        <h4>{t('about_surname1')}</h4>
                        <p>{t('about_position1')}</p>
                        <p>{t('about_description1')}</p>
                        <p>{t('capital')}</p>
                    </div>
                </div>

                <div className="about-column">
                    <Image src={person7} size='small' circular centered />
                    <div>
                        <h4>{t('about_surname7')}</h4>
                        <p>{t('about_position7')}</p>
                        <p>{t('about_description7')}</p>
                        <p>{t('capital')}</p>
                    </div>
                </div>

                <div className="about-column">
                    <Image src={person2} size='small' circular centered />
                    <div>
                        <h4>{t('about_surname2')}</h4>
                        <p>{t('about_position2')}</p>
                        <p>{t('about_description2')}</p>
                        <p>{t('capital')}</p>
                    </div>
                </div>

                <div className="about-column">
                    <Image src={person3} size='small' circular centered />
                    <div>
                        <h4>{t('about_surname3')}</h4>
                        <p>{t('about_position3')}</p>
                        <p>{t('about_description3')}</p>
                        <p>{t('city_Mogilev')}</p>
                    </div>
                </div>

                <div className="about-column">
                    <Image src={person4} size='small' circular centered />
                    <div>
                        <h4>{t('about_surname4')}</h4>
                        <p>{t('about_position4')}</p>
                        <p>{t('about_description4')}</p>
                        <p>{t('city_Brest')}</p>
                    </div>
                </div>
                <div className="about-column">
                    <Image src={person5} size='small' circular centered />
                    <div>
                        <h4>{t('about_surname5')}</h4>
                        <p>{t('about_position5')}</p>
                        <p>{t('about_description5')}</p>
                        <p>{t('city_Grodno')}</p>
                    </div>
                </div>

                <div className="about-column">
                    <Image src={person6} size='small' circular centered />
                    <div>
                        <h4>{t('about_surname6')}</h4>
                        <p>{t('about_position6')}</p>
                        <p>{t('about_description6')}</p>
                        <p>{t('city_Gomel')}</p>
                    </div>
                </div>

           
                <div className="about-column">
                    <Image src={person8} size='small' circular centered />
                    <div >
                        <h4>{t('about_surname8')}</h4>
                        <p>{t('about_position8')}</p>
                        <p>{t('about_description8')}</p>
                        <p>{t('capital')}</p>
                    </div>
                </div>

            </div>
        </div>
    );

};


export default AboutBlock;