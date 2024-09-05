#include <stdio.h>

int main()
{
	int num;
	printf("Enter diamond width: \n");
	scanf("%d", &num);
	
	for(int i=0;i<2*num-1,i++){
		int row;
		if (i<num){
			row=2*i+1;
		}
		else{
			row=2*(2*num-i-1)-1;
		}
		for(int x=0; k<2*n-comp; x++) {
			printf(" ");
		}
		for (j=0;j<2*n-row;j++) {
			print("* ");
		}
	print("\n");
	}
	return 0;
}
