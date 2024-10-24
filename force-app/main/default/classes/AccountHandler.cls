public class AccountHandler {
    public static void insertAccount(Integer inputValue){
        Integer count =1;
            List <Account> addAccounts = new List <Account>();
       	    while(count<=inputValue){         
            Account newRec = new Account();
            newRec.Name= 'Acme Inc '+count;
            newRec.AccountNumber = 'a000'+count;
            addAccounts.add(newRec);
            count = count+1;
        }
        System.debug(addAccounts);
        insert addAccounts;
    }
    
}