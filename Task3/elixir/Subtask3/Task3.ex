n=IO.gets("Enter width of diamond") |> String.trim() |> String.to_integer()
for i<-0..(div(n,2))do
	spaces=div(n-2*i-1,2)
	ast=2*i+1
	IO.puts(String.duplicate(" ", spaces) <> String.duplicate("*",ast))
     end
for i<- (div(n,2) -1)..0 do
	spaces=div(n-2*i-1,2)
	stars=2*i+1
	IO.puts(String.duplicate(" ",spaces)<> String.duplicate("*", ast))
     end
end
