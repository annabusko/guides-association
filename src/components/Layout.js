import React, { Fragment } from 'react';

import {  withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HeaderDividing from './Header';
import FooterBlock from './Footer';

import HomePage from '../pages/home';
import { HistoryBlock, RulesBlock, JoinBlock } from '../pages/about';
import BoardBlock from './Board';
import NewsBlock from './News';
import GuidesMainBlock from './GuidesMain';
import CertificationBlock from './Certification';
import TrainingCenters from './TrainingCenters';
import ContactBlock from './Contact';

import GuidesList from './GuidesList';

import Preloader from "./Preloader";
import ScrollToTopBtn from "./ScrollToTop";

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const RoutesWrapper = ({ location }) => (
  
    <Switch location={location}>
      <Route exact path='/' render={() => <HomePage />} />
      <Route path='/history' render={() => <HistoryBlock />} />
      <Route path='/rules' render={() => <RulesBlock />} />
      <Route path='/join' render={() => <JoinBlock />} />
      <Route path='/board' render={() => <BoardBlock />} />
      <Route path='/professional-development'render={() => <TrainingCenters />} />
      <Route path='/certification' render={() => <CertificationBlock />} />
      <Route path='/contact' render={() => <ContactBlock />} />
      
      <Route path='/news' render={() => <NewsBlock />} />
      <Route path='/guide-main' render={() => <GuidesMainBlock />} />
      <Route path='/guide1-search' render={() => <GuidesList fileName ='./interpreters.json' title ='menu_guide-search' type='interpreters'/>} />
      <Route path='/guide2-search' render={() => <GuidesList fileName ='./guides.json' title ='menu_guide2-search' type='guides'/>} />
      <Route path='/seminars' render={() => <Preloader />} />
      <Redirect to='/' />
    </Switch>

);

const pageTransitionsDuration = {
  enter: 1000,
  exit: 300
};
class App extends React.Component {

  render() {
    const { location } = this.props;

    const splitPathname = location.pathname.split("/");
    const currentKey = splitPathname[splitPathname.length - 1] || "/";

    return (
      <div>
        <TransitionGroup component="main">
          <CSSTransition
            key={currentKey}
            timeout={pageTransitionsDuration}
            classNames="main-transition"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <RoutesWrapper
              location={location}
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

const Layout = () => {

  return (
    <Fragment>
      <I18nextProvider i18n={i18n}>
        <HeaderDividing />
        <AppWithRouter />
        <ScrollToTopBtn />
        <FooterBlock />
      </I18nextProvider>
    </Fragment>
  );
}


export default Layout;