import React from "react";
import HomePage from '../HomePage'
import ApplicationFormPage from "../ApplicationFormPage";
import ListTripsPage from "../ListTripsPage"
import CreateTripPage from "../CreateTripPage"
import TripApprovalPage from "../TripApprovalPage"
import LoginPage from "../LoginPage"
import HomeAdmPage from '../HomePageAdm'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Router(){

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/formulario">
            <ApplicationFormPage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/listaviagens">
            <ListTripsPage />
          </Route>

          <Route exact path="/novasviagens">
            <CreateTripPage />
          </Route>

          <Route exact path="/aprovarinscricoes">
            <TripApprovalPage />
          </Route>

          <Route exact path="/homeadm">
            <HomeAdmPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
}

export default Router;
