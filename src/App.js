// import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.additional.css';
import React, { useMemo} from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './dx-styles.scss';
import LoadPanel from 'devextreme-react/load-panel';
import { NavigationProvider } from './contexts/navigation';
import { AuthProvider, useAuth } from './contexts/auth';
import { useScreenSizeClass } from './utils/media-query';
import Content from './Content';
import UnauthenticatedContent from './UnauthenticatedContent';
import config from 'devextreme/core/config'
import AdminContent from "./Admin-Content";
import {useDispatch, useSelector} from "react-redux";
import {loadingNavData} from "./redux/slice/layout-slice"
function App() {

  const { user, loading } = useAuth();
  config({ rtlEnabled: true });
  const adminClick=useSelector(state => state.layout.adminClick)
    // const navdata=useSelector(state => state.layout.navigationData)
    // const dispath=useDispatch()
    // useMemo(()=>{
    //     dispath(loadingNavData())
    //
    // },[])



  if (loading) {
    return <LoadPanel visible={true} />;
  }

    if (user && user.text==="admin" && adminClick) {
        return <AdminContent/>
    }
  if (user) {
      return <Content />;
  }

  return <UnauthenticatedContent />;
}

export default function Root() {
  const screenSizeClass = useScreenSizeClass();

  return (

    <Router>
      <AuthProvider>
          <NavigationProvider>
            <div className={`app ${screenSizeClass}`}>
              <App />
            </div>
          </NavigationProvider>
      </AuthProvider>
    </Router>

  );
}
