import { Route, Switch } from "react-router-dom";
import HomePage from "../Pages/Homepage/Homepage";
import Character from "../Pages/Character/Character";
import Homeworld from "../Pages/Homeworld/Homeworld";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/character/:characterName" component={Character} />
      <Route path="/homeworld/:url" component={Homeworld} />
    </Switch>
  );
};
export default Routes;
