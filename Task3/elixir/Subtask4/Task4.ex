dat=File.read("Input.txt") |> String.trim()
n=String.to_integer(dat)

u=
  for i<-0..(div(n,2))do
    space=div(n-2*i-1,2)
    ast=2*i+1
    String.duplicate(" ",space)<>String.duplicate("*",ast)<> "\n"
  end
  
l=
  for i<-(div(n,2)-1)..0 do
    space=div(n-2*i-1,2)
    ast=2*i+1
    String.duplicate("",space)<>String.duplicate("*",ast)<> "\n"
  end
dia=Enum.join(u+l)
File.write("output.txt",dia)
end
