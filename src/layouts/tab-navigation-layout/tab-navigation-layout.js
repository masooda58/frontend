import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import UserPanel from '../../components/user-panel/user-panel';
import { Template } from 'devextreme-react/core/template';
import Button from "devextreme-react/button";
import BrandName from "../../components/barnd-name/brand-name";
import TabNavigation from "../../components/tab-navigation/tab-navigation";

function TabNavigationLayout(props) {
    return (
        <div>
            <Toolbar >
                <Item
                    location={'before'}
                >
                    <BrandName color={"logo"}/>
                </Item>
                <Item
                    location={'before'}
                >
                    <TabNavigation whereClass={'top'}/>
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
        </div>
    );
}

export default TabNavigationLayout;