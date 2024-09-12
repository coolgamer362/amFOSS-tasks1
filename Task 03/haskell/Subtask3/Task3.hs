import Control.Monad (forM_)

printDiamond :: Int -> IO ()
printDiamond n = do
    let linesList = [1..n] ++ [n-1, n-2..1]
    forM_ linesList $ \i -> do
        let spaces = replicate (n - i) ' '
        let stars = replicate (2 * i - 1) '*'
        putStrLn (spaces ++ stars)

main :: IO ()
main = do
    putStr "Enter a number: "
    input <- getLine
    let n = read input :: Int
    printDiamond n
