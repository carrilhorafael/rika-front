import {BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import Layout from './common/layout/Layout';
import Home from './pages/home/Home'
import ListSubjects from './pages/subjects/ListSubjects'
import Initial from './pages/initial/Initial'
import AddLesson from './pages/addlesson/AddLesson';

export default function Routes () {
    return(
        <Router>
            <Layout>
                <Switch>
                    <Route exact path = "/"><Home/></Route>
                    <Route exact path = "/auth"><Initial/></Route>
                    <Route exact path = "/subjects"><ListSubjects/></Route>
                    <Route exact path = "/add_lesson"><AddLesson/></Route>
                    <Route exact path = "/b"></Route>
                </Switch>
            </Layout>
        </Router>
    )
}
