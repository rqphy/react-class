import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ArticlesPage from "../ArticlesPage/ArticlesPage";
import ArticlePage from "../ArticlePage/ArticlePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ArticlesPage} />
        <Route exact path="/article" component={ArticlePage} />
        <Route exact path="/article/:id" component={ArticlePage} />
        <Route component={() => "Error 404"} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
