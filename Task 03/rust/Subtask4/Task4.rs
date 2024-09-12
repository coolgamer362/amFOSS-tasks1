use std::fs::File;
use std::io::{self, Read, Write};

fn main() -> io::Result<()> {
    let mut input_file = File::open("input.txt")?;
    let mut input = String::new();
    input_file.read_to_string(&mut input)?;
    let n: usize = input.trim().parse().unwrap();

    let mut output_file = File::create("output.txt")?;

    for i in 0..n {
        for _ in 0..(n - i - 1) {
            write!(output_file, " ")?;
        }
        for _ in 0..(2 * i + 1) {
            write!(output_file, "*")?;
        }
        writeln!(output_file)?;
    }
    
    for i in (0..n - 1).rev() {
        for _ in 0..(n - i - 1) {
            write!(output_file, " ")?;
        }
        for _ in 0..(2 * i + 1) {
            write!(output_file, "*")?;
        }
        writeln!(output_file)?;
    }

    Ok(())
}
