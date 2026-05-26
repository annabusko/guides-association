import React, { Component, Fragment, useState } from 'react';
import { Image, Menu } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo.svg';

import MenuItems from './MenuItems';

import VerticalMenuBlock from './VericalMenu';
import BurgerButton from './Burger';
import LanguageRadio from './LocaleSwitcher'

class HeaderDividing extends Component {
  constructor() {
    super();
    this.state = {
      isPositionVertical: window.innerWidth <= 767
    };
    this.resizeRaf = null;
    this.updateMenuType = this.updateMenuType.bind(this);

  }
  componentDidMount() {
    window.addEventListener("resize", this.updateMenuType);
  }
  updateMenuType() {
    if (this.resizeRaf) {
      return;
    }

    this.resizeRaf = window.requestAnimationFrame(() => {
      const nextIsVertical = window.innerWidth <= 767;

      if (nextIsVertical !== this.state.isPositionVertical) {
        this.setState({
          isPositionVertical: nextIsVertical
        });
      }

      this.resizeRaf = null;
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMenuType);
    if (this.resizeRaf) {
      window.cancelAnimationFrame(this.resizeRaf);
      this.resizeRaf = null;
    }
  }
  render() {
    const isPositionVertical = this.state.isPositionVertical;
    return (

      <div className="header-wrapper">
        {isPositionVertical ?
          <VerticalMenu />
          :
          <HorizontalMenu />
        }
        <div className="header-switcher">
          <LanguageRadio />
        </div>
      </div>

    )
  }
}


const VerticalMenu = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Fragment>
      <div className="header-flex-row">
        <BurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <Image verticalAlign='middle' src={logo} alt={`${t('title_part1')} ${t('title_part2')}`} className="logo" width={280} height={96} />
      <VerticalMenuBlock menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </Fragment>
  );
}

const HorizontalMenu = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="header-brand">
        <Image verticalAlign='middle' src={logo} alt={`${t('title_part1')} ${t('title_part2')}`} className="logo" width={280} height={96} />
      </div>
      <div className="header-nav">
        <Menu className="main-menu" secondary inverted>
          <MenuItems />
        </Menu>
      </div>
    </Fragment>
  );
}
export default HeaderDividing;