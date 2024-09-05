import java.io.FileReader;
import java.io.FileWriter;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;

public class Filein{
    String inputFilepath="input.txt";
    String outputFilePath="output.txt";
    
}
    try{
        FileReader fr= new FileReader('input.txt');
        FileWriter fw= new FileWriter('output.txt');

        int dat;
        while ((dat=fr.read())!=-1){
            fw.write(dat);
        }
        
        fr.close()
        fw.close()
    

    }
