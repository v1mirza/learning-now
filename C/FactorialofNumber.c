#include <stdio.h>

// Function to calculate factorial
int calculate
(int n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}

int main() {
    int number;

    // Input
    printf("Enter a non-negative integer: ");
    scanf("%d", &number);

    // Check if the input is non-negative
    if (number < 0) {
        printf("Invalid input. Please enter a non-negative integer.\n");
        return 1; // Exit with an error code
    }

    // Calculate and display the factorial
    int factorial = calculateFactorial(number);
    printf("The factorial of %d is: %d\n", number, factorial);

    return 0; // Exit successfully
}
