import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import MenuItems from './MenuItems';
import { bool, func } from 'prop-types';

const VerticalMenuBlock = ({ menuOpen, setMenuOpen }) => {

    return (
        <Sidebar as={Menu}
            className="vertical-menu"
            animation='overlay'
            inverted
            onHide={() => setMenuOpen(false)}
            vertical
            visible={menuOpen}
        >
            <MenuItems />
        </Sidebar>
    )
}

VerticalMenuBlock.propTypes = {
    menuOpen: bool.isRequired,
    setMenuOpen: func.isRequired,
}

export default VerticalMenuBlock;