import { LightningElement, api, wire } from 'lwc';
import getContactController from '@salesforce/apex/ContactController.getContactController'

export default class ApexWireMethodToProperty extends LightningElement {
    @api recordId;
    @wire(getContactController,{accId : '$recordId'}) contacts;

}






//Create a class ContactController with method getContactList. Remove the constructor. 
//Make the class @AuraEnabled(cacheable=true)
//Change from string to List data type to get the contact list. Return SOQL Contact List
//Use Wire decorator service to import Salesforce Contacts to the JavaScript
//Collect list of contacts via a property. using name conRecord
//in html file, display the list of conatcts. it can either be contact.data or contact.error check using if else to see if contact.data is truthy. then iterate the list using for loop

