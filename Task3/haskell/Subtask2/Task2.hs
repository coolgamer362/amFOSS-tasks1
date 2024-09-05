import System.IO

main :: IO ()
main = do
    inputHandle <- openFile "input.txt" ReadMode
    contents <- hGetContents inputHandle
    hClose inputHandle
    
    outputHandle <- openFile "output.txt" WriteMode
    hPutStr outputHandle contents
    hClose outputHandle
