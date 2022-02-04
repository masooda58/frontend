import React, {useCallback, useMemo, useRef} from 'react';
import {Tabs} from "devextreme-react";
import {useScreenSize} from "../../utils/media-query";
import {navigation} from "../../app-navigation";
import {useHistory} from "react-router-dom";
import {useNavigation} from "../../contexts/navigation";

function TabNavigation(props) {
    const history=useHistory();
    const { isLarge } = useScreenSize();
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
    return (

        <Tabs
            ref={refTab}
            dataSource={items}
            width={300}
            scrollByContent={true}
            showNavButtons={true}
            onItemClick={onNavigationChanged}
        />

    );
}

export default TabNavigation;