import React, { Fragment, useState } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";


function MenuItems() {
    const { t } = useTranslation();
    const [activeItem, setActiveItem] = useState(window.location.hash.substr(1));
    return (
        <Fragment>
            <Menu.Item
                as={Link} to='/'
                name='home'
                active={activeItem === '/' || activeItem === 'home'}
                onClick={() => setActiveItem('home')}>
                {t('main_menu')}
            </Menu.Item>

            <Dropdown item text={t('menu_about')}>
                <Dropdown.Menu direction='left'>
                    <Dropdown.Item text={t('menu_history')} as={Link} to='/history' value="history"
                        active={activeItem === '/history' || activeItem === 'history'}
                        onClick={() => setActiveItem('history')} />
                    <Dropdown.Item text={t('menu_rules')} as={Link} to='/rules' value="rules"
                        active={activeItem === '/rules' || activeItem === 'rules'}
                        onClick={() => setActiveItem('rules')} />
                    <Dropdown.Item text={t('menu_board')} as={Link} to='/board' value="board"
                        active={activeItem === '/board' || activeItem === 'board'}
                        onClick={() => setActiveItem('board')} />
                    <Dropdown.Item text={t('menu_how_join')} as={Link} to='/join' value="join"
                        active={activeItem === '/join' || activeItem === 'join'}
                        onClick={() => setActiveItem('join')} />

                </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text={t('menu_guide')}>
                <Dropdown.Menu direction='left'>
                    <Dropdown.Item text={t('menu_guide-main')} as={Link} to='/guide-main' value="guide-main"
                        active={activeItem === '/guide-main' || activeItem === 'guide-main'}
                        onClick={() => setActiveItem('guide-main')} />
                    <Dropdown.Item text={t('menu_guide-search')} as={Link} to='/guide1-search' value="guide1-search"
                        active={activeItem === '/guide1-search' || activeItem === 'guide1-search'}
                        onClick={() => setActiveItem('guide1-search')} />
                    <Dropdown.Item text={t('menu_guide2-search')} as={Link} to='/guide2-search' value="guide2-search"
                        active={activeItem === '/guide2-search' || activeItem === 'guide2-search'}
                        onClick={() => setActiveItem('guide2-search')} />
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text={t('menu_trainings')} >
                <Dropdown.Menu direction='left'>
                    <Dropdown.Item text={t('menu_certification')} as={Link} to='/certification' value="certification"
                        active={activeItem === '/certification' || activeItem === 'certification'}
                        onClick={() => setActiveItem('certification')} />
                    <Dropdown.Item text={t('menu_professional-development')} as={Link} to='/professional-development' value="professional-development"
                        active={activeItem === '/professional-development' || activeItem === 'professional-development'}
                        onClick={() => setActiveItem('professional-development')} />
                    <Dropdown.Item text={t('menu_seminars')} as={Link} to='/seminars' value="seminars"
                        active={activeItem === '/seminars' || activeItem === 'seminars'}
                        onClick={() => setActiveItem('seminars')} />
                </Dropdown.Menu>
            </Dropdown>


            <Menu.Item
                as={Link} to='/news'
                name='news'
                active={activeItem === '/news' || activeItem === 'news'}
                onClick={() => setActiveItem('news')}>
                {t('menu_news')}</Menu.Item>
            <Menu.Item
                as={Link} to='/contact'
                name='contact'
                active={activeItem === '/contact' || activeItem === 'contact'}
                onClick={() => setActiveItem('contact')}>
                {t('menu_contact')}</Menu.Item>
        </Fragment>
    );
};

export default MenuItems;

