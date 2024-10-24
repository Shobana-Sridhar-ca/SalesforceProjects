import { LightningElement } from 'lwc';

export default class TrackCounterExample extends LightningElement {
    counter = 0;

    incrementCounter() {
        this.counter++;
    }
    decrementCounter() {
        this.counter++;
    }
}