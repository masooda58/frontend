import React, { useState} from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import './header.scss';
import {useNavigation} from "../../contexts/navigation";
import pic from '../../asset/img/logo__2.png'
import SearchBox from "../search-box/search-box";
import {useScreenSize} from "../../utils/media-query";
import {useDispatch, useSelector} from "react-redux";
import{mainMobileSearch} from"../../redux/project/actions"
import{ adminClick} from "../../redux/project/actions"
import {Tooltip} from "devextreme-react";
import {useAuth} from "../../contexts/auth";

export default function Header({ menuToggleEnabled, title, toggleMenu }) {
  const { navigationData: { currentPath } } = useNavigation();
  const showMobilSearch=useSelector(state => state.showMobilSearch)

const [toolToggel,setToolToggel]=useState(false)
  const dispatch=useDispatch()
  const { isXSmall } = useScreenSize();
 const{signOut } =useAuth()
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
            {!showMobilSearch ?
                <Button   icon="search" stylingMode="text" onClick={()=>dispatch(mainMobileSearch())} />
           :
                <Button   icon="close" stylingMode="text" onClick={()=>dispatch(mainMobileSearch())} />}
          </Item>}
          {isXSmall&&<Item
              // visible={!menuToggleEnabled}
              location={'after'}
              widget={'dxButton'}
              cssClass={'menu-button'}
          >
                <Button   icon="fa-light fa-cart-shopping" stylingMode="text" onClick={()=>dispatch(mainMobileSearch())} />
          </Item>}
          {isXSmall&&<Item
              // visible={!menuToggleEnabled}
              location={'after'}
              widget={'dxButton'}
              cssClass={'menu-button'}
          >
            <Button   icon="fa-light fa-user-gear" stylingMode="text" onClick={()=>dispatch(adminClick(true))} />
          </Item>}
          <Item
              // visible={!menuToggleEnabled}
              location={'after'}
              widget={'dxButton'}
              cssClass={'menu-button'}
          >
            <div id="exit"
                 onMouseEnter={()=>setToolToggel(true)}
                 onMouseLeave={()=>setToolToggel(false)}

            >
              <Button   icon="fa-light fa-right-from-bracket" stylingMode="text"
                        onClick={()=>signOut()}

              />
            </div>

            <Tooltip
                target="#exit"
                position="right"
                visible={toolToggel}
                closeOnOutsideClick={false}
            >
              <div>خروج</div>
            </Tooltip>
          </Item>

          {!isXSmall && <Item location={'center'}>
            <SearchBox/>
          </Item>
          }

          {isXSmall&&<Item location={'after'}>
            <img src={pic} padding={"10px"} width="45" height="55" />
          </Item>}
        </Toolbar>
      </div>
  )}
// panel karbari
// <Item
//     location={'after'}
//     locateInMenu={'auto'}
//     menuItemTemplate={'userPanelTemplate'}
// >
//   <Button
//       className={'user-button authorization'}
//       width={210}
//       height={'100%'}
//       stylingMode={'text'}
//   >
//     <UserPanel menuMode={'context'} />
//   </Button>
//
// </Item>
//
// <Template name={'userPanelTemplate'}>
//   <UserPanel menuMode={'list'} />
// </Template>