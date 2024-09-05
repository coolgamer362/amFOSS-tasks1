package main
import (
    "io/ioutil"
)
func main() {
    input, _ := ioutil.ReadFile("input.txt")
    ioutil.WriteFile("output.txt", input, 0644)
}
