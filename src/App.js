import React from 'react';
import { HashRouter,Route } from 'react-router-dom';
import Main from './pages/Main';
import Test from './pages/Test';


class App extends React.Component {

    render() {
        return (
            <HashRouter>
                <Route path="/" exact={true} component={Main}/>
                <Route path="/test" exact={true} component={Test}/>
            </HashRouter>
        );
    }
}

export default App;
