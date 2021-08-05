i=1
sum = 0
decimal = 1/3


def poly(x,i):
    s = 1
    j=1
    while(j<=i):
        s = s*x
        j = j+1
    return s


while (i<5000000):
    sum = sum + poly(decimal,i);
    print(sum)
    i = i + 1