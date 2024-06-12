#include <stdio.h>

int main() {
    int number, digit, sum = 0;

    // Input
    printf("Enter a non-negative integer: ");
    scanf("%d", &number);

    // Check if the input is non-negative
    if (number < 0) {
        printf("Invalid input. Please enter a non-negative integer.\n");
        return 1; // Exit with an error code
    }

    // Calculate the sum of digits
    while (number > 0) {
        digit = number % 10;
        sum += digit;
        number /= 10;
    }

    // Display the result
    printf("The sum of digits is: %d\n", sum);

    return 0; // Exit successfully
}
