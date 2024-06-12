#include <stdio.h>

int main() {
    int num1, num2;

    // Input
    printf("Enter the first number: ");
    scanf("%d", &num1);

    printf("Enter the second number: ");
    scanf("%d", &num2);

    // Check and print the greater number
    if (num1 > num2) {
        printf("The greater number is: %d\n", num1);
    } else if (num2 > num1) {
        printf("The greater number is: %d\n", num2);
    } else {
        printf("Both numbers are equal.\n");
    }

    return 0; // Exit successfully
}
