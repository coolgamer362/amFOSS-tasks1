File.open("Input.txt","r") do |infile|
d=file.read()
File.open("Output.txt","w") do |opfile|
opfile.write(d)
end 
end

