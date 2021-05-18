import {BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import Initial from './pages/initial/Initial'
import Home from './pages/home/Home'
import Layout from './common/layout/Layout';

export default function Routes () {
    return(
        <Router>
            <Layout>
                <Switch>
                    <Route exact path = "/auth"><Initial/></Route>
                    <Route exact path = "/"><Home/></Route>
                </Switch>
            </Layout>
        </Router>
    )
}
