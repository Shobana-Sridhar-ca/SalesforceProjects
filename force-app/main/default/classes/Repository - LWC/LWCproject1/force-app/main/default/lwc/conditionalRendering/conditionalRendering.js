import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    //Conditional Rendering in HTML in LWC. How to apply if-else in LWC
    //property value setting to false;
    areDetailsVisible = false;

    //function for handleChange
    handleChange(event){
        //this is reference to the current object
        this.areDetailsVisible = event.target.checked;
    }
}