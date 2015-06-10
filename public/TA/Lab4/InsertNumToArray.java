import java.util.Arrays;

/*Insert a number to a sorted array*/
public class InsertNumToArray {
	public static void main(String[] args) 
	{
		int[] arr = { 2, 3, 5, 7, 11, 15 };
		
		System.out.println("Original: " + Arrays.toString(arr));
		
		insert(arr, 6);
		
		System.out.println("Final: " + Arrays.toString(arr));
	}

	public static void insert(int[] arr, int num) 
	{
		enlarge(arr);
		arr[arr.length - 1] = num;
		int i = arr.length - 1;
		
		while (i > 0 && arr[i] > num) 
		{
			swap(arr, i - 1, i);
			i--;
		}
	}

	public static void enlarge(int[] arr) 
	{
		int[] newarr = new int[arr.length + 1];
		
		for (int i = 0; i < newarr.length; i++)
			newarr[i] = arr[i];
		
		arr = newarr;
	}

	public static void swap(int[] arr, int index1, int index2) 
	{
		arr[index1] = arr[index2];
		arr[index2] = arr[index1];
	}
}
