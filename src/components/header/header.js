import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import UserPanel from '../user-panel/user-panel';
import './header.scss';
import { Template } from 'devextreme-react/core/template';
import {useNavigation} from "../../contexts/navigation";


export default function Header({ menuToggleEnabled, title, toggleMenu }) {
  const { navigationData: { currentPath } } = useNavigation();
  return (
    <div>
      <Toolbar className={'test1'}>
        <Item
          visible={menuToggleEnabled}
          location={'before'}
          widget={'dxButton'}
          cssClass={'menu-button'}
        >
          <Button   icon="menu" stylingMode="text" onClick={toggleMenu} />
        </Item>

        <Item
            location={'before'}>
          {currentPath}

        </Item>
        {/*<Item location={'before'}>*/}
        {/*  <TabNavigation/>*/}
        {/*</Item>*/}
        {/*<Item*/}
        {/*  location={'after'}*/}
        {/*  locateInMenu={'auto'}*/}
        {/*  menuItemTemplate={'userPanelTemplate'}*/}
        {/*>*/}
        {/*  <Button*/}
        {/*    className={'user-button authorization'}*/}
        {/*    width={210}*/}
        {/*    height={'100%'}*/}
        {/*    stylingMode={'text'}*/}
        {/*  >*/}
        {/*    <UserPanel menuMode={'context'} />*/}
        {/*  </Button>*/}
        {/*</Item>*/}
        {/*<Template name={'userPanelTemplate'}>*/}
        {/*  <UserPanel menuMode={'list'} />*/}
        {/*</Template>*/}
      </Toolbar>
    </div>
)}
