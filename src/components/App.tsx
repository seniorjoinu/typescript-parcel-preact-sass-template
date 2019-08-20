import {Component, h} from 'preact';
import styles from './App.scss';

export default class App extends Component {
    public render() {
        return <div className={styles.app}>Hello, world!</div>;
    }
}
