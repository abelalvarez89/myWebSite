
public class Dog {
	int legs;
	String name;
	String sound;
	String gender;
	
	public void dogNoise(){
		System.out.println("The dog barks");
	}
	public String toString(){
		return name + " " + legs + " " + gender;
		
	}
}
