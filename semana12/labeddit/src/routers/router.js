import React from 'react'
import LoginPage from "../screens/login";
import PostPage from "../screens/post";
import FeedPage from "../screens/feed"
import RegisterPage from "../screens/register";
import { BrowserRouter, Switch, Route } from "react-router-dom";


const Router = () => {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={["/login", "/"]}>
            <LoginPage />
          </Route>

          <Route exact path={"/posts/:id"}>
            <PostPage />
          </Route>

          <Route exact path={"/feed"}>
            <FeedPage />
          </Route>

          <Route exact path={"/register"}>
            <RegisterPage />
          </Route>

          <Route>
            <div> "Opa! Esta página não pode ser encontrada"</div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
}

export default Router;