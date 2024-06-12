#include <stdio.h>

int main() {
    double number, square;

    // Input
    printf("Enter a number: ");
    scanf("%lf", &number);

    // Calculate the square
    square = number * number;

    // Display the result
    printf("The square of %.2lf is: %.2lf\n", number, square);

    return 0; // Exit successfully
}
