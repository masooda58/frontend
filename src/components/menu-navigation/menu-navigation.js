import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Menu} from "devextreme-react";
import {useScreenSize} from "../../utils/media-query";
import {navigation} from "../../app-navigation";
import {useHistory} from "react-router-dom";
import {useNavigation} from "../../contexts/navigation";
function MenuNavigation(props) {
    const history=useHistory();
    const { navigationData: { currentPath } } = useNavigation();
    function normalizePath () {
        return navigation.map((item) => {
            if(item.path && !(/^\//.test(item.path))){
                item.path = `/${item.path}`;
            }
            return {...item};
        });
    }
    const items = useMemo(
        normalizePath,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    const onNavigationChanged = useCallback((event) => {
        console.log(event)
        if ( !event.itemData.path ) {
            event.preventDefault();

            return;
        }

        history.push(event.itemData.path )

    }, [history]);
    const renderListItem=(itemData)=>{
      return(
          <i className={'test'} > {itemData.text}</i>
      )
    }

    return (
        <div>
            <Menu
                dataSource={items}
                onItemClick={onNavigationChanged}
                itemRender={renderListItem}
                >
                {props.Children}
            </Menu>

        </div>
    );
}

export default MenuNavigation;