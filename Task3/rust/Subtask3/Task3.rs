use std::io;

fn main() -> io::Result<()> {
    let mut input = String::new();
    println!("Enter width of diamond: ");
    io::stdin().read_line(&mut input)?;
    let n: usize = input.trim().parse().unwrap();

    for i in 0..n {
        for _ in 0..(n - i - 1) {
            print!(" ");
        }
        for _ in 0..(2 * i + 1) {
            print!("*");
        }
        println!();
    }
    
    for i in (0..n - 1).rev() {
        for _ in 0..(n - i - 1) {
            print!(" ");
        }
        for _ in 0..(2 * i + 1) {
            print!("*");
        }
   

