import React from 'react';
import ReactDOM from 'react-dom';
import { observable, configure, action } from 'mobx';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const appState = observable({
    count: 0,
    incCount: action("Increment Counter", () => {
        appState.count += 1;
    }),
    decCount: action("Decrement Counter", () => {
        appState.count -= 1;
    }),
    get countByThree() {
        return this.count * 3;
    },
    get countByFour() {
        return this.count * 4;
    }
});

const Counter = observer(props => (
    <section>
        {props.appState.count}
        <div>
            <button onClick={props.appState.incCount}>Add</button>
            <button onClick={props.appState.decCount}>Dec</button>
            <DevTools />
        </div>
        <div>Count by Three {props.appState.countByThree} </div>
        <div>Count by Four {props.appState.countByFour} </div>
    </section>
));

ReactDOM.render(
    <Counter appState={appState} /> ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
configure({ enforceActions: true })
