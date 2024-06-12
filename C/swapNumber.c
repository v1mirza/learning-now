#include <stdio.h>

int main() {
    int num1, num2, temp;

    // Input
    printf("Enter the first number: ");
    scanf("%d", &num1);

    printf("Enter the second number: ");
    scanf("%d", &num2);

    // Display numbers before swap
    printf("Before swap:\n");
    printf("First number: %d\n", num1);
    printf("Second number: %d\n", num2);

    // Swap the numbers
    temp = num1;
    num1 = num2;
    num2 = temp;

    // Display numbers after swap
    printf("After swap:\n");
    printf("First number: %d\n", num1);
    printf("Second number: %d\n", num2);

    return 0; // Exit successfully
}
