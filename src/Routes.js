import {BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import Layout from './common/layout/Layout';
import Home from './pages/home/Home'
import Class from './pages/class/Class'
import Initial from './pages/initial/Initial'

export default function Routes () {
    return(
        <Router>
            <Layout>
                <Switch>
                    <Route exact path = "/"><Home/></Route>
                    <Route exact path = "/auth"><Initial/></Route>
                    <Route exact path = "/class"><Class/></Route>
                    <Route exact path = "/add_class"></Route>
                    <Route exact path = "/b"></Route>
                </Switch>
            </Layout>
        </Router>
    )
}
