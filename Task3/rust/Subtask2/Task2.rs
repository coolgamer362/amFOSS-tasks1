use std::fs::File;
use std::io::{self, Read, Write};

fn main() -> io::Result<()> {
    let mut input_file = File::open("input.txt")?;
    let mut content = String::new();
    input_file.read_to_string(&mut content)?;
    let mut output_file = File::create("output.txt")?;
    output_file.write_all(content.as_bytes())?;
    Ok(())
}
