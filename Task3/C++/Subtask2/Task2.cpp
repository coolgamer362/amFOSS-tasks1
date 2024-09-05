#include<iostream>
#include<fstream>
using namespace std;
int main()
{
	char dat[100];
	ifstream ipfile("input.txt");
	ipfile.getline(dat,100);
	ipfile.close();

	ofstream opfile("output.txt");
	opfile<<dat;
	opfile.close();
	return 0;
}
