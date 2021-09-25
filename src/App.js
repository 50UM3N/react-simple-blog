import Nav from "./components/Nav";
import Home from "./routes/Home";
import About from "./routes/About";
import Page404 from "./routes/Page404";
import Create from "./routes/Create";
import SinglePost from "./routes/SinglePost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                    <Route path="/create" exact>
                        <Create />
                    </Route>
                    <Route path="/post/:postId" exact>
                        <SinglePost />
                    </Route>
                    <Route path="*" exact>
                        <Page404 />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
