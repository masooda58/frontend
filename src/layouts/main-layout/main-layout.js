import Button from 'devextreme-react/button';
import Drawer from 'devextreme-react/drawer';
import ScrollView from 'devextreme-react/scroll-view';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import React, { useState, useCallback, useRef } from 'react';
import { useHistory } from 'react-router';
import { Header, SideNavigationMenu, Footer } from '../../components';
import './main-layout.scss';
import { useScreenSize } from '../../utils/media-query';
import { Template } from 'devextreme-react/core/template';
import { useMenuPatch } from '../../utils/patches';
import TabNavigation from "../../components/tab-navigation/tab-navigation";
import BrandName from "../../components/barnd-name/brand-name";
import TabNavigationLayout from "../tab-navigation-layout/tab-navigation-layout";
import {sideNavSearch} from "../../redux/project/actions";
import {useDispatch} from "react-redux";

export default function MainLayout({ title, children }) {
    const scrollViewRef = useRef();
    const dispatch=useDispatch()
    const history = useHistory();
    const { isXSmall, isLarge } = useScreenSize();
    const [patchCssClass, onMenuReady] = useMenuPatch();
    const [menuStatus, setMenuStatus] = useState(
        isLarge ? MenuStatus.Opened : MenuStatus.Closed
    );

    const toggleMenu = useCallback(({ event }) => {
        setMenuStatus(
            prevMenuStatus => prevMenuStatus === MenuStatus.Closed
                ? MenuStatus.Opened
                : MenuStatus.Closed
        );
        event.stopPropagation();
    }, []);

    const temporaryOpenMenu = useCallback(() => {
        setMenuStatus(
            prevMenuStatus => prevMenuStatus === MenuStatus.Closed
                ? MenuStatus.TemporaryOpened
                : prevMenuStatus
        );
    }, []);

    const onOutsideClick = useCallback(() => {
        setMenuStatus(
            prevMenuStatus => prevMenuStatus !== MenuStatus.Closed && !isLarge
                ? MenuStatus.Closed
                : prevMenuStatus
        );
    }, [isLarge]);

    const onNavigationChanged = useCallback(({ itemData: { path }, event, node }) => {
        if (menuStatus === MenuStatus.Closed || !path || node.selected) {
            event.preventDefault();
            return;
        }

        history.push(path);
        scrollViewRef.current.instance.scrollTo(0);

        if (!isLarge || menuStatus === MenuStatus.TemporaryOpened) {
            setMenuStatus(MenuStatus.Closed);
            event.stopPropagation();
        }
    }, [history, menuStatus, isLarge]);

    return (

            <div  className={'side-nav-inner-toolbar'}>
                {!isXSmall && <TabNavigationLayout/> }
                <Drawer
                    className={['drawer', patchCssClass].join(' ')}
                    position={'before'}
                    closeOnOutsideClick={onOutsideClick}
                    openedStateMode={isLarge ? 'shrink' : 'overlap'}
                    revealMode={isXSmall ? 'slide' : 'expand'}
                    minSize={isXSmall ? 0 : 60}
                    maxSize={250}
                    shading={!isLarge}
                    opened={menuStatus !== MenuStatus.Closed}
                    template={'menu'}
                >
                    <div className={'container'}>
                        <Header
                            menuToggleEnabled={isXSmall}
                            toggleMenu={toggleMenu}
                        />
                        <ScrollView ref={scrollViewRef} className={'layout-body with-footer'}>
                            <div className={'content'}>
                                {React.Children.map(children, item => {
                                    return item.type !== Footer && item;
                                })}
                            </div>
                            <div className={'content-block'}>
                                {React.Children.map(children, item => {
                                    return item.type === Footer && item;
                                })}
                            </div>
                        </ScrollView>
                    </div>
                    <Template name={'menu'}>
                        <SideNavigationMenu
                            compactMode={menuStatus === MenuStatus.Closed}
                            selectedItemChanged={onNavigationChanged}
                            openMenu={temporaryOpenMenu}
                            onMenuReady={onMenuReady}
                        >
                            <Toolbar   id={'navigation-header'}>
                                {
                                    // !isXSmall &&
                                    <Item
                                        location={'before'}
                                        cssClass={'menu-button'}

                                    >
                                        <Button icon="menu" stylingMode="text" onClick={toggleMenu} />
                                    </Item>
                                }
                                <Item location={'before'} cssClass={'header-title'}  >
                                    <BrandName  />
                                </Item>
                                <Item location={'before'} cssClass={'header-title'}  >
                                    <Button icon="search" stylingMode="text" onClick={(e)=>{dispatch(sideNavSearch(e))}} />
                                </Item>
                            </Toolbar>
                        </SideNavigationMenu>
                    </Template>
                </Drawer>
                <div style={{    position: 'fixed' ,bottom: '0',width:"100%"}}>
                    {isXSmall && <TabNavigation whereClass={'down'}/> }
                </div>

            </div>


    );
}

const MenuStatus = {
    Closed: 1,
    Opened: 2,
    TemporaryOpened: 3
};
