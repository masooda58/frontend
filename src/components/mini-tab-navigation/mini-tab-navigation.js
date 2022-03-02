import React, {useCallback, useEffect, useState} from 'react';
import { Tabs} from "devextreme-react";
import "./mini-tab-navigation.scss"
import {useHistory, useLocation} from "react-router-dom";
import {useAuth} from "../../contexts/auth";
import {useDispatch} from "react-redux";
import {ADMINCLICK} from "../../redux/layout-slice";

const MiniTabNavigation = () => {
    const {user}=useAuth()
    const history = useHistory();
    const dispatch= useDispatch();
    const location = useLocation();

    const [selectTab,setSelectTab]=useState()

    const items=[

        {
            text: 'خرید اشتراک',
            icon: "fa-light fa-cart-shopping"
        },
        {
            text: 'پنل کاربری',
            icon: "fa-light fa-user fa-2xs",
            path:"/example/profile"
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
          dispatch(ADMINCLICK({permit:true}))
      }

        history.push(event.itemData.path);

    }, [history]);
    useEffect(()=>{

        if(location.pathname===undefined){
            return
        }
        for(let item of items)
        {

            if(location.pathname.includes(item.path))
            {
                setSelectTab(item.path)
             return;
            }

        }
        setSelectTab()
    },[location.pathname])


    return (
        <div >
            <Tabs className={'left'}
                  dataSource={items}
                  onItemClick={onNavigationChanged}
                  keyExpr={'path'}
                  selectedItemKeys={selectTab===undefined || '' ?[]:[selectTab]}
                  // itemRender={renderListItem}
                />

        </div>
    );
};

export default MiniTabNavigation;
