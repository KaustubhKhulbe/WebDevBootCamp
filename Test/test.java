public class test {
     public static void main(String[] args) {
          System.out.println(mystery(2));
     }

     public static int mystery(int y) {
          y = 2 * y + y;
          y = 2 * y + y;
          return y;
     }
}
