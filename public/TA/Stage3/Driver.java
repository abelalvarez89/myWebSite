
public class Driver {

	public static void main(String[] args) {
		Read read = new Read("Stage3.txt");
		String message = read.readFile();
		
		System.out.println(message);
	}

}
