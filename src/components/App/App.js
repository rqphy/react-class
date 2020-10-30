import ArticlesPage from "../ArticlesPage/ArticlesPage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ArticlesPage} />
    </BrowserRouter>
  );
}
export default App;
