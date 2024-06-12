#include <stdio.h>

int main() {
    double num1, num2, num3, average;

    // Input
    printf("Enter the first number: ");
    scanf("%lf", &num1);

    printf("Enter the second number: ");
    scanf("%lf", &num2);

    printf("Enter the third number: ");
    scanf("%lf", &num3);

    // Calculate the average
    average = (num1 + num2 + num3) / 3;

    // Display the result
    printf("The average of %.2lf, %.2lf, and %.2lf is: %.2lf\n", num1, num2, num3, average);

    return 0; // Exit successfully
}
