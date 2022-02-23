import React, {useCallback} from 'react';
import {Button, Tabs} from "devextreme-react";
import "./mini-tab-navigation.scss"
import ContextMenu, {Position} from "devextreme-react/context-menu";
import {useHistory} from "react-router-dom";

const MiniTabNavigation = () => {
    const history = useHistory();
    const items=[
        {
            text: "Admin Panel",
            icon:"fa fa-user-gear",
            path:"/create-account"

        },
        {
            text: 'خرید اشتراک',
            icon: "fa fa-cart-shopping"
        },
        {
            text: 'پنل کاربری',
            icon: "fa-solid fa-user fa-2xs"
        }
]
    const renderListItem=(itemData)=>{

        return(
    <b> {itemData.text}

    </b>
        )
    }
    const onNavigationChanged = useCallback((event) => {


        history.push('/create-account');

    }, [history]);
    return (
        <div >
            <Tabs className={'left'}
                  dataSource={items}
                  onItemClick={onNavigationChanged}
                  // itemRender={renderListItem}
                />

        </div>
    );
};

export default MiniTabNavigation;
