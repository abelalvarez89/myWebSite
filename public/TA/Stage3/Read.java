import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;


public class Read {
	String fileName;
	
	public Read (String fileName){
		this.fileName = fileName;
	}
	/**
	 * public String readFile()
	 * This method will read in a file and returns a string with 
	 * the same format the file has
	 */
	public String readFile(){
		Scanner input = null;
		try {
			input = new Scanner(new File(fileName));
		} catch (FileNotFoundException e) {
			System.out.println("Wrong file");
			return "";
		}
		String message = "";
		while(input.hasNextLine()){
			message = message + input.nextLine() + "\n";
		}
		input.close();
		return message;
	}
}
