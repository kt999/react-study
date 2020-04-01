import React from 'react';
import { HashRouter,Route } from 'react-router-dom';
import Main from './pages/Main';

class App extends React.Component {

    render() {
        return (
            <HashRouter>
                <Route path="/" exact={true} component={Main}/>
            </HashRouter>
        );
    }
}

export default App;
