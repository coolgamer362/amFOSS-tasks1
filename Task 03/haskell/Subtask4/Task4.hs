import System.IO

printDiamond :: Int -> String
printDiamond n = unlines $ map generateLine linesList
  where
    linesList = [1..n] ++ [n-1, n-2..1]
    generateLine i = spaces ++ stars
      where
        spaces = replicate (n - i) ' '
        stars  = replicate (2 * i - 1) '*'

main :: IO ()
main = do
    inputHandle <- openFile "input.txt" ReadMode
    input <- hGetContents inputHandle
    let n = read input :: Int
    hClose inputHandle
    
    let diamond = printDiamond n
    
    outputHandle <- openFile "output.txt" WriteMode
    hPutStr outputHandle diamond
    hClose outputHandle
