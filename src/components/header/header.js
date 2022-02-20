import React, {useEffect, useState} from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import './header.scss';
import {useNavigation} from "../../contexts/navigation";
import pic from '../../asset/img/logo__2.png'
import SearchBox from "../search-box/search-box";
import {useScreenSize} from "../../utils/media-query";
import UserPanel from "../user-panel/user-panel";
import {Template} from "devextreme-react/core/template";
import {useDispatch, useSelector} from "react-redux";
import{mainMobileSearch} from"../../redux/project/actions"

export default function Header({ menuToggleEnabled, title, toggleMenu }) {
  const { navigationData: { currentPath } } = useNavigation();
  const showMobilSearch=useSelector(state => state.showMobilSearch)
  const [showClass,setShowClass]=useState()
  useEffect(()=>{
    if(showMobilSearch){
      setShowClass(true)
    }
    else{
      setShowClass(false)
    }
  },[showMobilSearch])
  const dispatch=useDispatch()
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
            {!showMobilSearch ?
                <Button   icon="search" stylingMode="text" onClick={()=>dispatch(mainMobileSearch())} />
           :
                <Button   icon="close" stylingMode="text" onClick={()=>dispatch(mainMobileSearch())} />}
          </Item>}
          {!isXSmall && <Item location={'center'}>
            <SearchBox/>
          </Item>
          }
          {isXSmall&&<Item location={'after'}>
            <img src={pic} padding={"10px"} width="45" height="55" />
          </Item>}
          <Item
            location={'after'}
            locateInMenu={'auto'}
            menuItemTemplate={'userPanelTemplate'}
          >
            <Button
              className={'user-button authorization'}
              width={210}
              height={'100%'}
              stylingMode={'text'}
            >
              <UserPanel menuMode={'context'} />
            </Button>
          </Item>
          <Template name={'userPanelTemplate'}>
            <UserPanel menuMode={'list'} />
          </Template>
        </Toolbar>
      </div>
  )}
