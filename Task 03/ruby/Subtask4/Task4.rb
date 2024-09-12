n = File.read("input.txt").chomp.to_i
opfile = File.open("output.txt", "w")
(0...n).each do |i|
	opfile.write(' '*(n-i-1))
	opfile.write('*'(2*i+1))
	opfile.write('\n')
end
(n-2).downto(0) do |i|
	opfile.write(' '*(n-i-1))
	opfile.write('*'(2*i+1))
	opfile.write('\n')
end

opfile.close
