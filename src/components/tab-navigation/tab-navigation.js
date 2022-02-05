import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Tabs} from "devextreme-react";
import {useScreenSize} from "../../utils/media-query";
import {navigation} from "../../app-navigation";
import {useHistory} from "react-router-dom";
import {useNavigation} from "../../contexts/navigation";

function TabNavigation(props) {
    const history=useHistory();
    const { isLarge } = useScreenSize();
    const[selectTab,setSelectTab]=useState()
    const refTab=useRef()
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
    const { navigationData: { currentPath } } = useNavigation();
    const onNavigationChanged = useCallback((event) => {
        if ( !event.itemData.path ) {
            event.preventDefault();

            return;
        }

        history.push(event.itemData.path )

    }, [history]);
    useEffect(()=>{
        if(currentPath===undefined){
            return
        }
        for(let item of items)
        {

            if(currentPath.includes(item.path))
            {
                setSelectTab(item.path)
            }
        }
    },[currentPath])

    return (
<div>
    <Tabs
        ref={refTab}
        dataSource={items}
        selectionMode={'single'}
        keyExpr={'path'}
        width={'100%'}
        height={'10%'}
        selectedItemKeys={selectTab===undefined?[]:[selectTab]}
        scrollByContent={true}
        showNavButtons={true}
        onItemClick={onNavigationChanged}
        // currentPath===undefined?[]:[currentPath]
    />

</div>


    );
}

export default TabNavigation;