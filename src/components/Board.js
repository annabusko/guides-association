import React from 'react';
import { Tab, Menu, Card, Image } from 'semantic-ui-react';

import { useTranslation } from "react-i18next";

const img_about_main = require('../assets/images/different/about.group.jpg');

const MenuTitle = ({ title }) => {
  const { t } = useTranslation();
  return <h3>{t(title)}</h3>;
};

const CardTitle = ({ name }) => {
  const { t } = useTranslation();
  return <h4>{t(name)}</h4>;
};

const CardText = ({ text }) => {
  const { t } = useTranslation();
  return <p>{t(text)}</p>;
};

const boss = {
  src: require('../assets/images/board/boss.jpg'),
  name: (<CardTitle name='about_team_boss' />),
  text: (<CardText text='about_team_boss_text' />),
  phone: '+375297697529',
  classTitle: 'board-card board-single ',
  color: 'red'
};

const secretary = {
  src: require('../assets/images/board/secretary.jpg'),
  name: (<CardTitle name='about_team_secretary' />),
  text: (<CardText text='about_team_secretary_text' />),
  phone: '+375298632150',
  classTitle: 'board-card board-single ',
  color: 'red'
};

const crue = [
  {
    src: require('../assets/images/board/crue1.jpg'),
    name: (<CardTitle name='about_team_crue1' />),
    text: (<CardText text='about_team_crue1_text' />),
    meta: (<CardText text='about_team_crue1_post' />),
    classTitle: 'board-card board-group',
    color: 'orange'
  },
  {
    src: require('../assets/images/board/crue2.jpg'),
    name: (<CardTitle name='about_team_crue2' />),
    text: (<CardText text='about_team_crue2_text' />),
    meta: (<CardText text='about_team_crue2_post' />),
    classTitle: 'board-card board-group',
    color: 'orange'
  },
  {
    src: require('../assets/images/board/crue4.jpg'),
    name: (<CardTitle name='about_team_crue4' />),
    text: (<CardText text='about_team_crue4_text' />),
    classTitle: 'board-card board-group',
    color: 'grey'
  },
  {
    src: require('../assets/images/board/crue6.jpg'),
    name: (<CardTitle name='about_team_crue6' />),
    text: (<CardText text='about_team_crue6_text' />),
    classTitle: 'board-card board-group',
    color: 'grey'
  },
  {
    src: require('../assets/images/board/crue3.jpg'),
    name: (<CardTitle name='about_team_crue3' />),
    text: (<CardText text='about_team_crue3_text' />),
    classTitle: 'board-card board-group',
    color: 'grey'
  },
  {
    src: require('../assets/images/board/crue5.jpg'),
    name: (<CardTitle name='about_team_crue5' />),
    text: (<CardText text='about_team_crue5_text' />),
    classTitle: 'board-card board-group',
    color: 'grey'
  },
  {
    src: require('../assets/images/board/crue7.jpg'),
    name: (<CardTitle name='about_team_crue7' />),
    text: (<CardText text='about_team_crue7_text' />),
    classTitle: 'board-card board-group',
    color: 'grey'
  },
  {
    src: require('../assets/images/board/boss.jpg'),
    name: (<CardTitle name='about_team_boss' />),
    text: (<CardText text='about_team_boss_text_short' />),
    classTitle: 'board-card board-group',
    color: 'grey'
  },

];

const comission = [
  {
    src: require('../assets/images/board/comission1.jpg'),
    name: (<CardTitle name='about_team_comission1' />),
    text: (<CardText text='about_team_comission1_text' />),
    meta: (<CardText text='about_team_comission1_post' />),
    classTitle: 'board-card board-group',
    color: 'orange'
  },
  {
    src: require('../assets/images/board/comission2.jpg'),
    name: (<CardTitle name='about_team_comission2' />),
    text: (<CardText text='about_team_comission2_text' />),
    classTitle: 'board-card board-group',
    color: 'grey'
  },
  {
    src: require('../assets/images/board/comission3.jpg'),
    name: (<CardTitle name='about_team_comission3' />),
    text: (<CardText text='about_team_comission3_text' />),
    classTitle: 'board-card board-group',
    color: 'grey'
  },

];

const BoardCard = ({ data }) => (
  <Card centered color={data.color} className={data.classTitle}>

    <Image src={data.src} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.name}</Card.Header>
      {!data.meta ? null : <Card.Meta>
        <span className='date'>{data.meta}</span>
      </Card.Meta>
      }
      <Card.Description>
        {data.text}
      </Card.Description>
    </Card.Content>
    {!data.phone ? null : <Card.Content className="board-extra" extra>
      <p>{data.phone}</p>
    </Card.Content>
    }
  </Card>
)


const panes = [
  {
    menuItem: (<Menu.Item key='boss'>
      <MenuTitle title='about_team_boss_title' />
    </Menu.Item>), render: () => <Tab.Pane><BoardCard data={boss} /></Tab.Pane>
  },
  {
    menuItem: (<Menu.Item key='crue'>
      <MenuTitle title='about_team_crue_title' />
    </Menu.Item>),
    render: () =>
      <Tab.Pane>
        <Card.Group stackable itemsPerRow={3}>
          {crue.map((val, i) => (<BoardCard data={val} key={i} />))}
        </Card.Group>
      </Tab.Pane>
  },
  {
    menuItem: (<Menu.Item key='comission'>
      <MenuTitle title='about_team_comission_title' />
    </Menu.Item>),
    render: () =>
      <Tab.Pane>
        <Card.Group stackable itemsPerRow={3}>
          {comission.map((val, i) => (<BoardCard data={val} key={i} />))}
        </Card.Group>
      </Tab.Pane>
  },
  {
    menuItem: (<Menu.Item key='secretary'>
      <MenuTitle title='about_team_secretary_title' />
    </Menu.Item>), render: () => <Tab.Pane><BoardCard data={secretary} /></Tab.Pane>
  },
];

const BoardBlock = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="content-main-image"
        style={{
          background: `url(${img_about_main})`
        }} >
        <div>
          <h1>{t('menu_about')}</h1>
        </div>
      </div>
      <div className="content-wrapper content-wrapper-tab content-wrapper-board">
        <h2>{t('menu_board')}</h2>

        <Tab
          className="boardTab"
          menu={{ fluid: true, vertical: true }}
          grid={{ paneWidth: 11, tabWidth: 5 }}
          defaultActiveIndex={1}
          menuPosition='right'
          panes={panes}
        />
      </div>

    </div>
  )
};

export default BoardBlock;
