import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    //create an object to bind property value
    //data binding is a process where value is bound to property
    employee = {
        fName: 'Shobana',
        lName: 'Sridhar',
        Age: 27,
        City: 'Chennai'
    }
    //getter properties are used to perform some calculations and return values
    get getEmployeeRank(){
        const rank = this.employee.Age>=50?'Three':this.employee.Age>=30?'Two':'One';
        return rank;
    }
}