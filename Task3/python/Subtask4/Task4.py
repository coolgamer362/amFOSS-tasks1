with open('input.txt', 'r') as infile:
    n = int(infile.read().strip())

lines = []
for i in range(n):
    lines.append(' ' * (n - i - 1) + '*' * (2 * i + 1))

for i in range(n - 2, -1, -1):
    lines.append(' ' * (n - i - 1) + '*' * (2 * i + 1))

with open('output.txt', 'w') as outfile:
    outfile.write('\n'.join(lines))
