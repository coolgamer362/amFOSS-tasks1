#include<iostream>
#include<fstream>
using namespace std;

int main()
{	
	int n;
	ifstream numfile("input.txt");
	numfile>>n;
	numfile.close();
	
	ofstream outnumfile("output.txt")
	
	
	for(int i = 1; i <= n; i++) {
		for(int j=1;j<n;j++){
			outnumfile<<" ";
		}
		
		for (int j=1;j<=(2*i-1);j++){
			outnumfile<<""*"";
		}
		outnumfile<<endl;
	}
	for(int i = n-1; i >= 1; i--) {
		for(int j = n; j > i; j--) {
			outnumfile<< " ";
		}
		for(int j = 1; j <= (2 * i - 1); j++) {
			outnumfile<<("*")
		}
		outnumfile<<endl;
		
	outnumfile.close()
	
	return 0;
}
