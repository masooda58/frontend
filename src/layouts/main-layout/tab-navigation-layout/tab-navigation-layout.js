import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import UserPanel from '../../../components/user-panel/user-panel';
import './tab-navigation-layout.scss';
import { Template } from 'devextreme-react/core/template';
import Button from "devextreme-react/button";
import BrandName from "../../../components/barnd-name/brand-name";
import TabNavigation from "../../../components/tab-navigation/tab-navigation";

function TabNavigationLayout(props) {
    return (
        <header className={'header-component'}>
            <Toolbar className={'header-toolbar'}>
                <Item
                    cssClass={'menu-button'}
                >
                    <TabNavigation/>
                </Item>
                <Item
                    location={'before'}
                >
                    <BrandName/>
                </Item>
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
        </header>
    );
}

export default TabNavigationLayout;