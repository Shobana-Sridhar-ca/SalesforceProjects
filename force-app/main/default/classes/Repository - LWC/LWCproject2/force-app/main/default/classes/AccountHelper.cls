public with sharing class AccountHelper {
   //with sharing enforces sharing rule. makes sure apex code runs in context of current user.
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccountList(Id accId){
    try {
        return [SELECT Name, Phone FROM Account WHERE Id=:accId];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }
}


//cacheable=true means data is saved on client side and because of that our component's performance gets improved. 