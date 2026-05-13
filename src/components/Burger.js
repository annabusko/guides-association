import React from 'react';
import { Button } from 'semantic-ui-react';
import { bool, func } from 'prop-types';

const BurgerButton = ({ menuOpen, setMenuOpen }) => {
    return (
        <Button inverted icon='bars' size='massive' aria-label={menuOpen ? 'Close menu' : 'Open menu'} className={{menuOpen} ? 'header-button header-button-active' : 'header-button'} onClick={() => setMenuOpen(!menuOpen)} />
    );

};

BurgerButton.propTypes  = {
  menuOpen: bool.isRequired,
  setMenuOpen: func.isRequired,
};
export default BurgerButton;
