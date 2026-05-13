import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';
import { useTranslation } from "react-i18next";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as guidesActions from '../assets/store/actions/guides';
import FilterBlock from './FilterInterpreters';
import * as filterLodash from 'lodash/filter';
import * as isEmptyLodash from 'lodash/isEmpty';

const img_guides_main = require('../assets/images/different/guides.jpg');

const MenuTitle = ({ title, tg }) => {
  const { t } = useTranslation();
  return (tg === 'h1' ? <h1>{t(title)}</h1> : <h2>{t(title)}</h2>);
};

const GuideCard = (guide) => {
  const { name, email, phone, lang, city, img } = guide;
  return (
    <Card className="guides-search" color='red'>
      <Card.Content>
        <Image
          floated='left'
          size='small'
          src={img ?? 'interpreters/no-person.png'}
        />
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Meta>
          {city}
        </Card.Meta>
        <Card.Description className="guides-description">
          {
            lang.split(';').map((language, i) => (
              <div key={i}>
                {language}
              </div>
            ))
          }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div><Icon name='phone' />{phone} </div>
        <div><Icon name='envelope open outline' /><a href={"mailto:" + email} >{email}</a></div>
      </Card.Content>
    </Card>
  )
}

class GuidesList extends Component {
  componentDidMount() {
    const { setGuides } = this.props;
    axios.get(this.props.fileName).then(({ data }) => {
      setGuides(data);
    });
  }

  render() {

    const { guides, isReady } = this.props;
    return (
      <div>
        <div className="content-main-image"
          style={{
            background: `url(${img_guides_main})`
          }} >
          <div>
            <MenuTitle title='menu_guide' tg='h1' />
          </div>
        </div>
        <div className="content-wrapper-guides content-wrapper-board">

          <MenuTitle title={this.props.title} tg='h2' />
          <FilterBlock type={this.props.type}/>
          <Card.Group itemsPerRow={3} stackable>
            {
              !isReady ? 'Loading.....' : guides.map((guide, i) => (
                <GuideCard key={i}{...guide} />
              ))
            }
          </Card.Group>
        </div>
      </div>
    )

  }
}

const filterLanguages = (guides, filterLang) =>
  isEmptyLodash(filterLang.value) ? guides :
    filterLodash(guides, o =>
      filterLang?.value?.some(elem => o.lang.toLowerCase().indexOf(elem.toLowerCase()) >= 0)
    );

const filterCities = (guides, filterCity) =>
  isEmptyLodash(filterCity.value) ? guides :
    filterLodash(guides, o =>
      filterCity?.value?.some(elem => o.city.toLowerCase().indexOf(elem.toLowerCase()) >= 0)
    );

const filterGuides = (guides, searchQuery) =>
  filterLodash(guides, o =>
    o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
    o.city.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
    o.lang.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );

const searchGuides = (guides, searchQuery, filterLang, filterCity) => {
  return filterCities(filterLanguages(filterGuides(guides, searchQuery), filterLang), filterCity);
}

const mapStateToProps = ({ guides, filter }) => ({
  guides: searchGuides(guides.items, filter.searchQuery, filter.filterLang, filter.filterCity),
  isReady: guides.isReady
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(guidesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GuidesList);

