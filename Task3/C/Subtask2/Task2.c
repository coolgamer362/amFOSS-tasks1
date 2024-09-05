#include <stdio.h>
#include <string.h>

int main()
{
	FILE *inpfile,*opfile ;
	char dat[100];

	inpfile=fopen("input.txt","r");
	opfile=fopen("output.txt","w");

	while (fgets(dat,sizeof(dat),inpfile !=NULL){
	fputs(dat,opfile);
	}
	fclose(inpfile);
	fclose(opfile);
	return 0;
}
