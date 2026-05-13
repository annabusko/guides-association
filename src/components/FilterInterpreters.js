import React from 'react';

import { useTranslation } from "react-i18next";

import { Input, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../assets/store/actions/filter';

const languagesLarge = [
  { key: 'ja', text: 'Японский / Japanese', value: 'japanese', image: { avatar: true, src: require('../assets/images/flags/ja-Japanese.png') }, },
  { key: 'en', text: 'Английский / English', value: 'english', image: { avatar: true, src: require('../assets/images/flags/en-English.png') }, },
  { key: 'pr', text: 'Персидский / Persian', value: 'persian', image: { avatar: true, src: require('../assets/images/flags/ir-Iran.png') }, },
  { key: 'pl', text: 'Польский / Polish', value: 'polish', image: { avatar: true, src: require('../assets/images/flags/pl-Polish.png') }, },
  { key: 'tk', text: 'Турецкий / Turkish', value: 'turkish', image: { avatar: true, src: require('../assets/images/flags/tk-Turkish.png') }, },
  { key: 'de', text: 'Немецкий / German', value: 'german', image: { avatar: true, src: require('../assets/images/flags/de-German.png') }, },
  { key: 'ar', text: 'Арабский / Arabic', value: 'arabic', image: { avatar: true, src: require('../assets/images/flags/ar-Arabic.png') }, },
  { key: 'he', text: 'Иврит / Hebrew', value: 'hebrew', image: { avatar: true, src: require('../assets/images/flags/he-hebrew.png') }, },
  { key: 'es', text: 'Испанский / Spanish', value: 'spanish', image: { avatar: true, src: require('../assets/images/flags/es-Spanish.png') }, },
  { key: 'fr', text: 'Французский / French', value: 'french', image: { avatar: true, src: require('../assets/images/flags/fr-French.png') }, },
  { key: 'ch', text: 'Китайский / Chinese', value: 'chinese', image: { avatar: true, src: require('../assets/images/flags/ch-Chinese.png') }, },
  { key: 'it', text: 'Итальянский / Italian', value: 'italian', image: { avatar: true, src: require('../assets/images/flags/it-Italian.png') }, },
]

const citiesSmall = [
  { key: 'mn', text: 'Минск / Minsk', value: 'minsk', },
  { key: 'vt', text: 'Витебск / Vitebsk', value: 'vitebsk', }
]

const languagesSmall =  [
  { key: 'ru', text: 'Русский / Russian', value: 'russian', image: { avatar: true, src: require('../assets/images/flags/ru-Russian.png') }, },
  { key: 'by', text: 'Белорусский / Belarusian', value: 'belarusian', image: { avatar: true, src: require('../assets/images/flags/by-Belarusian.png') }, },
]

const citiesLarge = [
  { key: 'bn', text: 'Барановичи / Baranovichi', value: 'baranovichi', },
  { key: 'bo', text: 'Борисов / Borisov', value: 'borisov', },
  { key: 'bv', text: 'Браслав / Braslav', value: 'braslav', },
  { key: 'br', text: 'Брест / Brest', value: 'brest', },
  { key: 'vt', text: 'Витебск / Vitebsk', value: 'vitebsk', },
  { key: 'gl', text: 'Глубокое / Glubokoye', value: 'glubokoye', },
  { key: 'gm', text: 'Гомель / Gomel', value: 'gomel', },
  { key: 'gr', text: 'Гродно / Grodno', value: 'grodno', },
  { key: 'dv', text: 'Дятлово / Dyatlovo', value: 'dyatlovo', },
  { key: 'kr', text: 'Кореличи / Korelichi', value: 'korelichi', },
  { key: 'lg', text: 'Логойск / Logoisk', value: 'logoisk', },
  { key: 'mn', text: 'Минск / Minsk', value: 'minsk', },
  { key: 'mg', text: 'Могилев / Mogilev', value: 'mogilev', },
  { key: 'ml', text: 'Молодечно / Molodechno', value: 'molodechno', },
  { key: 'ng', text: 'Новогрудок / Novogrudok', value: 'novogrudok', },
  { key: 'pn', text: 'Пинск / Pinsk', value: 'pinsk', },
  { key: 'pl', text: 'Полоцк / Polotsk', value: 'polotsk', },
  { key: 'pr', text: 'Пружаны / Pruzhany', value: 'pruzhany', },
]

const mapStateToProps = ({ filter }) => ({
  filterLang: filter.filterLang,
  filterCity: filter.filterCity
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterActions, dispatch)
});

const FilterBlock = (filterProps) => {
  const { t } = useTranslation();
  const {searchQuery, setSearchQuery, setFilterLang, setFilterCity, type} = filterProps;
  return (
    <div className="filter-container">
      <Dropdown placeholder='Языки' clearable fluid multiple selection options={type==='guides' ? languagesSmall :languagesLarge} onChange={(e, { value }) => setFilterLang({ value })} />
      <Dropdown placeholder='Город' clearable fluid multiple selection options={type==='guides' ? citiesLarge : citiesSmall} onChange={(e, { value }) => setFilterCity({ value })} />
      <Input
        icon="search"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery} placeholder={t('search')}></Input>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBlock);






