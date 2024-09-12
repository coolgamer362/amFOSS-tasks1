print "Enter the number of rows for diamond: "
n = gets.chomp.to_i

(0...n).each do |i|
  print ' ' * (n - i - 1)
  print '*' * (2 * i + 1)
  puts
end

(n - 2).downto(0) do |i|
  print ' ' * (n - i - 1)
  print '*' * (2 * i + 1)
  puts
end
