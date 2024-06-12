#include <stdio.h>

int main() {
    int n;

    // Input
    printf("Enter a positive integer: ");
    scanf("%d", &n);

    // Check if the input is a positive integer
    if (n <= 0) {
        printf("Invalid input. Please enter a positive integer.\n");
        return 1; // Exit with an error code
    }

    // Calculate the sum of natural numbers
    int sum = n * (n + 1) / 2;

    // Display the result
    printf("The sum of the first %d natural numbers is: %d\n", n, sum);

    return 0; // Exit successfully
}
