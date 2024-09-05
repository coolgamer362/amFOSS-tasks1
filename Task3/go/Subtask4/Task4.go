package main
import (
    "fmt"
    "io/ioutil"
    "strconv"
    "strings"
)

func main() {
	data, _ := ioutil.ReadFile("input.txt")
	n, _ := strconv.Atoi(strings.TrimSpace(string(data)))
	var result strings.Builder
	for i := 1; i <= n; i++ {
        for j := 0; j < n-i; j++ {
            result.WriteString(" ")
        }
        for k := 0; k < 2*i-1; k++ {
            result.WriteString("*")
        }
        result.WriteString("\n")
    }
	for i := n - 1; i >= 1; i-- {
        for j := 0; j < n-i; j++ {
            result.WriteString(" ")
        }
        for k := 0; k < 2*i-1; k++ {
            result.WriteString("*")
        }
        result.WriteString("\n")
    }
	ioutil.WriteFile("output.txt", []byte(result.String()), 0644)
}

