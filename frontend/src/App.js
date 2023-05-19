import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormModal from "./components/User/LoginFormModal";
import AllRestaurants from "./components/Restaurant/AllRestaurants";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import CreateRestaurant from "./components/Restaurant/CreateRestaurant";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
  <>
  <Navigation isLoaded={isLoaded}/>
   {isLoaded && (
      <Switch>
        <Route exact path="/">
          <AllRestaurants/>
        </Route>
        <Route exact path="/create">
          <CreateRestaurant/>
        </Route>
      </Switch>
    )
   }
    </>
  );
}

export default App;
