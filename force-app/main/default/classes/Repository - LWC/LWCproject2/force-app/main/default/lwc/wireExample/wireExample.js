import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
//Using wire decorator we are retriving Salesforce Account Object Data
export default class WireExample extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: ['Account.Name', 'Account.Phone'] })
    accounts;

    get getName() {
        if (this.accounts.data)
            return getFieldValue(this.accounts.data, 'Account.Name');
        else if (this.accounts.error)
            return this.accounts.error;
    }

    get getPhone() {
        if (this.accounts.data)
            return getFieldValue(this.accounts.data, 'Accounts.Phone');
        else if (this.accounts.error)
            return this.accounts.error;
    }
}