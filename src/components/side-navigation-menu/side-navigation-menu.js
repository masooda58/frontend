import React, {useEffect, useRef, useCallback, useMemo, useState} from 'react';
import TreeView from 'devextreme-react/tree-view';
import { navigation } from '../../app-navigation';
import { useNavigation } from '../../contexts/navigation';
import { useScreenSize } from '../../utils/media-query';
import './side-navigation-menu.scss';
import{useSelector} from 'react-redux'

import * as events from 'devextreme/events';



export default function SideNavigationMenu(props) {
  const sideNavSearchState= useSelector( state=> state.layout.sideNavSearch)
  const {
    children,
    selectedItemChanged,
    openMenu,
    compactMode,
    onMenuReady
  } = props;
  const [enableSearch,setEnablesearch]=useState();
  const { isLarge } = useScreenSize();
  function normalizePath () {
    return navigation.map((item) => {
      if(item.path && !(/^\//.test(item.path))){
        item.path = `/${item.path}`;
      }
      return {...item, expanded: isLarge};
    });
  }

  const items = useMemo(
    normalizePath,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const { navigationData: { currentPath } } = useNavigation();

  const treeViewRef = useRef();
  const wrapperRef = useRef();
  const getWrapperRef = useCallback((element) => {
    const prevElement = wrapperRef.current;
    if (prevElement) {
      events.off(prevElement, 'dxclick');
    }

    wrapperRef.current = element;
    events.on(element, 'dxclick', e => {
      openMenu(e);
    });
  }, [openMenu]);

  useEffect(() => {
    if (compactMode!=undefined){
      setEnablesearch(!compactMode)
    }


    const treeView = treeViewRef.current && treeViewRef.current.instance;
    if (!treeView) {
      return;
    }

    if (currentPath !== undefined) {
      treeView.selectItem(currentPath);
      treeView.expandItem(currentPath);
    }

    if (compactMode) {
      treeView.collapseAll();
    }
  }, [currentPath, compactMode,sideNavSearchState]);

  return (
    <div
      className={'dx-swatch-additional side-navigation-menu'}
      ref={getWrapperRef}
    >
      {children}
      <div className={'menu-container'}>

        <TreeView
          ref={treeViewRef}
          items={items}
          keyExpr={'path'}
          searchEnabled={sideNavSearchState && enableSearch}
          selectionMode={'single'}
          focusStateEnabled={false}
          expandEvent={'click'}
          onItemClick={selectedItemChanged}
          onContentReady={onMenuReady}
          width={'100%'}
          useNativeScrolling={false}
        />

      </div>

    </div>
  );
}
