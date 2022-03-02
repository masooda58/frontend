import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import appInfo from './app-info';
import routes from './app-routes';
import { Footer } from './components';
import MainLayout from "./layouts/main-layout/main-layout";
import {useAuth} from "./contexts/auth";
import AdminContent from "./Admin-Content";
import {useSelector} from "react-redux";


export default function Content(props) {
    const {user}=useAuth()
    const adminClick=useSelector(state => state.layout.adminClick)

  return (

              <MainLayout title={appInfo.title}>

                  <Switch>
                      {routes.map(({path, component}) => (
                          <Route
                              exact
                              key={path}
                              path={path}
                              component={component}
                          />
                      ))}
                      {(user && user.text === "admin" && adminClick) && <Route exact path={'/admin'} component={AdminContent}/>}
                      <Redirect to={'/home'}/>

                  </Switch>
                  <Footer>
                      Copyright © 2011-{new Date().getFullYear()} {appInfo.title} Inc.
                      <br/>
                      All trademarks or registered trademarks are property of their
                      respective owners.
                  </Footer>
              </MainLayout>

  );
}
