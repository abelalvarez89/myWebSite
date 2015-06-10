import java.util.Scanner;

public class DoubleRounder {

	/**
	 * This program should be corrected to round off a decimal-type
	 * number to a set number of decimal places.
	 */
	public static void main(String[] args) 
	{
		Scanner input = new Scanner(System.in)
		
		do
		{
			System.out.print("Enter a double to be rounded: ");
			
			if(input.hasNextDouble())
			{
				double x = input.nextDouble();
			}
			else
			{
				System.out.println("Error.");
				input.next();
			}
			
		} while(true);
		
		do
		{
			System.out.print("How many decimal places would you like to keep? ");
			
			if(input.hasNextInt())
			{
				int decimals = input.nextInt();
				
				if(decimals < 0)
				{
					System.out.println("Error.");
				}
			}
			else
			{
				System.out.println("Error.");
				input.next();
			}
			
		} while(true);
		
		// This line should be corrected to do rounding properly.
		// Intentionally left highly erroneous for this exercise.
		double result = Math.round(x * Math.pow(x, decimals));
		
		System.out.println("Your number, rounded: " + result);
	}

}
