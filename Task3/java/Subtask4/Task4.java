import java.io.FileReader;
import java.io.FileWriter;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;

public class DiamondPatternToFile {
    public static void main(String[] args) {
        String inputFile = "input.txt";
        String outputFile = "output.txt"

        try {
            FileReader fr = new FileReader(inputFile);
            int n = 0;
            int c;
            StringBuilder number = new StringBuilder();


            while ((c = fr.read()) != -1) {
                if (Character.isDigit(c)) {
                    number.append((char) c);
                }
            }
            fr.close()
            n = Integer.parseInt(number.toString().trim());

            FileWriter fw = new FileWriter(outputFile);
            int mid = n / 2;

            for (int i = 0; i <= mid; i++) {
                for (int j = 0; j < mid - i; j++) {
                    fw.write(" ");
                }
                for (int j = 0; j < 2 * i + 1; j++) {
                    fw.write("*");
                }
                fw.write("\n");
            }
            for (int i = mid - 1; i >= 0; i--) {
                for (int j = 0; j < mid - i; j++) {
                    fw.write(" ");
                }
                for (int j = 0; j < 2 * i + 1; j++) {
                    fw.write("*");
                }
                fw.write("\n");
            }
            
            fw.close();
        } catch (IOException e) {
            System.err.println("An error occurred: " + e.getMessage());
        }
    }
}
