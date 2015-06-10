
public class Quadratic {
	private int a;
	private int b;
	private int c;
	private int degree = 0;
	RationalNumber number;

	private int arrayA[] = new int[20];
	private int arrayC[] = new int[20];
	private Roots root = new Roots();

	public Quadratic(int a, int b, int c) {
		this.a = a;
		this.b = b;
		this.c = c;

	}

	public Roots quadraticEquation() {

		double quadratic1 = 0;
		double quadratic2 = 0;
		double sq = (b * b) - (4 * a * c);
		if(Math.sqrt(sq) % 2 == 0 || Math.sqrt(sq) % 3 == 0){
		quadratic1 = (-b + Math.sqrt(sq)) / (2 * a);
		quadratic2 = (-b - Math.sqrt(sq)) / (2 * a);
		root.setRoot(quadratic1);
		root.setRoot(quadratic2);
		}
		else{
			root.setSquare(true);
			number = new RationalNumber(-b, 2*a);
			root.setRoot(number.getDenominator());
			root.setRoot(number.getNumerator());
		}
		return root;
	}

	public Roots solve() {
		int partAup;
		int partAdown;
		int partCup;
		int partCdown;
	
		arrayA = divisible(a);
		arrayC = divisible(c);


		print(arrayA, 'A');
		//print(arrayC, 'C');

		for (int i = 0; i < arrayA.length; i++) {
			partAup = arrayA[i];
			partAdown = arrayA[i + 1];
			i = i + 1;
			
			if(partAup == 0)
				break;
			//System.out.println(partAup + ", " + partAdown);
			for (int j = 0; j < arrayC.length; j++) {
				partCup = arrayC[j];
				partCdown = arrayC[j + 1];
				//System.out.println(partCup + ", " + partCdown);
				j = j + 1;
				if(partCup == 0)
					break;
				if((partAup*partCdown + partAdown*partCup) == b){
					//System.out.println(partAup + "  " + partAdown + "  " + partCup + "  " + partCdown);
					root.setRoot(partAup);
					root.setRoot(partCup);
					root.setRoot(partAdown);
					root.setRoot(partCdown);
				//	System.out.println(partAup + " " + partCup + " " + partAdown + " " + partCdown);
					return root;
					
				}
				else if((partAdown*partCdown + partAup*partCup) == b){
					System.out.println(partAup + "  " + partCdown + "  " + partAdown + "  " + partCup);
					root.setRoot(partAup);
					root.setRoot(partCup);
					root.setRoot(partAdown);
					root.setRoot(partCdown);
				//	System.out.println(partAup + " " + partCup + " " + partAdown + " " + partCdown);
					return root;
				}

			}
		}
		return root;
	}

	private void print(int[] temp, char ar) {
		//System.out.print(ar + ": ");
		for (int i = 0; i < temp.length; i++) {
			if (temp[i] == 0) {
				//System.out.println();
				return;
			}
			//System.out.print(temp[i] + ", ");
		}
	}

	private int[] divisible(int number) {
		int temp[] = new int[20];
		int count = 0;
	
		if (number > 0) {
			for (int i = 0; i < (number / 2) + 1; i++) {
				if(i == 0)
					i++;
				if (number % i == 0) {
					degree = degree + 2;
					temp[count++] = i;
					temp[count++] = number / i;
					if ((-i) * -(number / i) == number) {
						degree = degree + 2;
						temp[count++] = (-i);
						temp[count++] = (-number / i);
					}
				}
			}
		} else {
			for (int i = number; i < 0; i++) {
				if (number % i == 0) {
					degree = degree + 2;
					temp[count++] = i;
					temp[count++] = number / i;
				}
			}
		}
		return temp;
	}

}
