import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Search from "./pages/Search/Search";
import Navbar from "./components/Navbar";
import Recipe from "./pages/Recipes/Recipes";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";
function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
          <Route path="/search" exact component={Search} />
          <Route path="/search" exact component={Search} />
          <Route path="/recipe/:id" exact component={Recipe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
