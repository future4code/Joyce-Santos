import React from "react";
import HomePage from '../HomePage'
import ApplicationFormPage from "../ApplicationFormPage";
import ListTripsPageAdm from "../ListTripsPageAdm"
import CreateTripPage from "../CreateTripPage"
import TripApprovalPage from "../TripApprovalPage"
import LoginPage from "../LoginPage"
import HomeAdmPage from '../HomePageAdm'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListTripsPage from "../ListTripsPage"

function Router(){

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/formulario/:id">
            <ApplicationFormPage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/listaviagens">
            <ListTripsPageAdm />
          </Route>

          <Route exact path="/novasviagens">
            <CreateTripPage />
          </Route>

          <Route exact path="/aprovarinscricoes/:id">
            <TripApprovalPage />
          </Route>

          <Route exact path="/homeadm">
            <HomeAdmPage />
          </Route>

          <Route exact path="/escolherviagem">
            <ListTripsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
}

export default Router;
