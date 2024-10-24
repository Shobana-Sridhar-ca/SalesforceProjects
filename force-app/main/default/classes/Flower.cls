//create class named flower
public class Flower {
 //creating variables for this class
    public String color;
    public Integer height;
    public Integer maxHeight;
    public Integer numberOfPetals;
    
    //method1
    public static Integer wilt(Integer numberOfPetals){
        if(numberOfPetals>1){
            numberOfPetals--;
        }
        return numberOfPetals;
    }
    //method2
    public static void growth(Integer height, Integer maxHeight){
        height = height +2;
        if(height>=maxHeight){
            pollinate();
        } 
    }
    //method3
    public static void pollinate(){
        System.debug('Pollinating...');
    }
    
}