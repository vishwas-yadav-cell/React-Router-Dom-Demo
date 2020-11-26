import java.util.Scanner;

class test {
    String MainPassword = "r213@!#d21dQW65123bjss";
    public static void main(String args[]){
        Scanner ob = new Scanner(System.in);
        String password = ob.next();

        if (password.equals(MainPassword)) {
            System.out.println("Passwords Matched Successfully.");
        }else{
            System.out.println("Passwords Not Matched!");
        }
    }
}