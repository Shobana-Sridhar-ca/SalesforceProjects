public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactController(Id AccId){
        try {
            return [SELECT Id, Name FROM Contact WHERE Account Id=: AccId];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}