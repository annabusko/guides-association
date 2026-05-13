import React from 'react';
import { Icon, Segment, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const FooterBlock = () => {
    const { t } = useTranslation();
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="footer-menu">
                    <List  horizontal>
                        <List.Item  className ="list-item" as={Link} to='/'>  {t('main_menu')}</List.Item>
                        <List.Item className ="list-item">
                            {t('menu_about')}
                            <List.List>
                                <List.Item as={Link} to='/history'> {t('menu_history')}</List.Item>
                                <List.Item as={Link} to='/rules'>{t('menu_rules')} </List.Item>
                                <List.Item as={Link} to='/board'>{t('menu_board')}</List.Item>
                                <List.Item as={Link} to='/join'>{t('menu_how_join')}</List.Item>
                            </List.List>
                        </List.Item> 
                        
                        <List.Item className ="list-item">
                            {t('menu_guide')}
                            <List.List>
                                <List.Item as={Link} to='/guide-main'> {t('menu_guide-main')}</List.Item>
                                <List.Item as={Link} to='/guide-search'>{t('menu_guide-search')} </List.Item>
                            </List.List>
                        </List.Item>
                     
                        <List.Item className ="list-item">
                            {t('menu_trainings')}
                            <List.List>
                                <List.Item as={Link} to='/certification'> {t('menu_certification')}</List.Item>
                                <List.Item as={Link} to='/professional-development'>{t('menu_professional-development')} </List.Item>
                                <List.Item as={Link} to='/seminars'>{t('menu_seminars')}</List.Item>
                            </List.List>
                        </List.Item>

                        <List.Item className ="list-item" as={Link} to='/news'> {t('menu_news')}</List.Item>
                        <List.Item className ="list-item" as={Link} to='/contact'>  {t('menu_contact')}</List.Item>
                    </List>
                </div>
                <div className="footer-info">
                    <List>
                        <List.Item>{t('title_part1')}<br />{t('title_part2')} </List.Item>
                        <List.Item>{t('adress')} </List.Item>
                        <List.Item>{t('unp')}</List.Item>
                    </List>
                </div>
            </div>
            <div className="footer-copyright">
                <Segment >
                    <span> Copyright </span>
                    <Icon name='copyright outline' size='huge' />
                    <span>2020 Anna Busko</span>
                    <List horizontal className="social-list">
                        <List.Item>
                            <a href="https://github.com/HannaBusko" target="_blank" rel="noopener noreferrer">
                                <Icon name="github" size="huge" color="grey" />
                            </a>
                        </List.Item>
                        <List.Item>
                            <a href="https://www.linkedin.com/in/anna-busko-844a7984/" target="_blank" rel="noopener noreferrer">
                                <Icon name="linkedin" size="huge" color="blue" />
                            </a>
                        </List.Item>

                    </List>
                </Segment>
            </div>
        </div >
    )
};

export default FooterBlock;