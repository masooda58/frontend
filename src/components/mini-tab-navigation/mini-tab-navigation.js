import React, {useCallback} from 'react';
import { Tabs} from "devextreme-react";
import "./mini-tab-navigation.scss"
import {useHistory} from "react-router-dom";
import {useAuth} from "../../contexts/auth";
import {useDispatch} from "react-redux";
import {adminClick} from '../../redux/project/actions'

const MiniTabNavigation = () => {
    const {user}=useAuth()
    const history = useHistory();
    const dispatch= useDispatch();
    const items=[

        {
            text: 'خرید اشتراک',
            icon: "fa-light fa-cart-shopping"
        },
        {
            text: 'پنل کاربری',
            icon: "fa-light fa-user fa-2xs"
        }
]
    if (user.text==='admin'){
        items.push(
            {
                text: "Admin Panel",
                icon:"fa-solid fa-user-gear",
                path:"/admin"

            })
    }
    const renderListItem=(itemData)=>{

        return(
    <b> {itemData.text}

    </b>
        )
    }
    const onNavigationChanged = useCallback((event) => {
      if(event.itemData.text==="Admin Panel")
      {
          dispatch(adminClick(true))
      }

        history.push(event.itemData.path);

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
