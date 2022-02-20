import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import UserPanel from '../../components/user-panel/user-panel';
import { Template } from 'devextreme-react/core/template';
import Button from "devextreme-react/button";
import BrandName from "../../components/barnd-name/brand-name";
import TabNavigation from "../../components/tab-navigation/tab-navigation";
import pic from "../../asset/img/logo__2.png";

function TabNavigationLayout(props) {
    return (
        <div>
            <Toolbar >
                <Item
                    location={'before'}>
                    <img src={pic} padding={"10px"} width="45" height="55" />
                </Item>
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

            </Toolbar>
        </div>
    );
}

export default TabNavigationLayout;