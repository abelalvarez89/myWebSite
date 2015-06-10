import java.util.Scanner;


public class MonthDays {

	public static void main(String[] args) {
		String[] months = { "January", "February", "March", "April", "May",
				"June", "July", "August", "September", "October", "November",
				"December" };
		boolean incorrect = true;
		Scanner input = new Scanner(System.in);
		
		do{
			System.out.println("Please enter a month");
			
			while(!input.hasNextInt()){
				System.out.println("It needs to be an integer" + "\nPlease enter a month");
				input.next();
			}
			
			int number =  input.nextInt();
			
			if(number <= 12 && number > 0){
				
				System.out.print(months[number - 1]);
				
				switch(number){
				case 1:
				case 3:
				case 5:
				case 7:
				case 8:
				case 10:
				case 12:
					System.out.println(" has 31 days.");
					break;
				case 2:
					System.out.println(" has 28/29 days.");
					break;
				default:
					System.out.println(" has 30 days.");
					break;
				}
				
				incorrect = false;
				
			}
			else{
				System.out.println("Number needs to be between 1-12");
			}
					
		}while(incorrect);

	}

}
