
public class Driver {

	public static void main(String[] args) {
		int[] dog = new int[10];
	
		
		Dog dog1 = new Dog();
		dog1.legs = 4;
		dog1.name = "Rocky";
		dog1.sound = "Bark";
		dog1.gender = "boy";
		
		Dog dog2 = new Dog();
		dog2.legs = 4;
		dog2.name = "Joe";
		dog2.sound = "Bark";
		dog2.gender = "female";
		
		
		System.out.println(dog1.name);
		dog1.dogNoise();
		System.out.println(dog2);
	}
	
}
