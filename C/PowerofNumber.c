#include <stdio.h>

// Function to calculate power
double calculatePower(double base, int exponent) {
    double result = 1.0;

    if (exponent > 0) {
        for (int i = 1; i <= exponent; ++i) {
            result *= base;
        }
    } else if (exponent < 0) {
        for (int i = 1; i <= -exponent; ++i) {
            result /= base;
        }
    }

    return result;
}

int main() {
    double base, result;
    int exponent;

    // Input
    printf("Enter the base: ");
    scanf("%lf", &base);

    printf("Enter the exponent: ");
    scanf("%d", &exponent);

    // Calculate power
    result = calculatePower(base, exponent);

    // Display the result
    printf("%.2lf raised to the power of %d is: %.2lf\n", base, exponent, result);

    return 0; // Exit successfully
}
