year = int(input("Which year do you want to check? "))
if year %400==0:
    print (f" {year} Is leap year")
elif year%4==0 and year%100!=0:
    print(f" {year} Is Leap year")
else:
    print(f"{year} Is Not Leap Year")


