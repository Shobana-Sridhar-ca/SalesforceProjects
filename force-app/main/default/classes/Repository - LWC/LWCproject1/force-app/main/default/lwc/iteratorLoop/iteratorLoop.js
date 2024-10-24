import { LightningElement } from 'lwc';

export default class IteratorLoop extends LightningElement {
    //create an object to bind property value
    //creating array list of employees 
    employeeList =
        [
            { fName: 'Sridhar', lName: 'Rajagopalan', Age: 57, City: 'Chennai' },
            { fName: 'Radha', lName: 'Sridhar', Age: 50, City: 'Chennai' },
            { fName: 'Vandanaa', lName: 'Sridhar', Age: 29, City: 'San Jose' },
            { fName: 'Shobana', lName: 'Sridhar', Age: 27, City: 'Chennai' }
        ]

}


