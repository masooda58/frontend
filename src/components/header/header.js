import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import './header.scss';
import {useNavigation} from "../../contexts/navigation";
import pic from '../../asset/img/logo__2.png'
import SearchBox from "../search-box/search-box";
import {useScreenSize} from "../../utils/media-query";

export default function Header({ menuToggleEnabled, title, toggleMenu }) {
  const { navigationData: { currentPath } } = useNavigation();
  const { isXSmall } = useScreenSize();
  return (
      <div>
        <Toolbar className={'mobil-menu'}>
          <Item
              visible={menuToggleEnabled}
              location={'before'}
              widget={'dxButton'}
              cssClass={'menu-button'}
          >
            <Button   icon="menu" stylingMode="text" onClick={toggleMenu} />
          </Item>
          {isXSmall&&<Item
              // visible={!menuToggleEnabled}
              location={'after'}
              widget={'dxButton'}
              cssClass={'menu-button'}
          >
            <Button   icon="search" stylingMode="text"  />
          </Item>}
          {!isXSmall && <Item location={'center'}>
            <SearchBox/>
          </Item>
          }
          {isXSmall&&<Item location={'after'}>
            <img src={pic} padding={"10px"} width="45" height="55" />
          </Item>}
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
