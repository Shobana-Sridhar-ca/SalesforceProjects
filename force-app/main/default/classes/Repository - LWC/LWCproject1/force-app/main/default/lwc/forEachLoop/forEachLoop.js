import { LightningElement } from 'lwc';

export default class ForEachLoop extends LightningElement {
    employeeList = [
        {
            fName: 'Sridhar',
            lName: 'Rajagopalan',
            Age: 57,
            City: 'Chennai'
        },
        {
            fName: 'Radha',
            lName: 'Sridhar',
            Age: 50,
            City: 'Chennai'
        },
        {
            fName: 'Vandanaa',
            lName: 'Sridhar',
            Age: 29,
            City: 'Chennai'
        },
        {
            fName: 'Shobana',
            lName: 'Sridhar',
            Age: 27,
            City: 'Chennai'

        }
    ]
}
