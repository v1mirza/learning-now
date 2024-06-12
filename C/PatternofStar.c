#include <stdio.h>

int main() {
    int rows;

    // Input
    printf("Enter the number of rows for the star pattern: ");
    scanf("%d", &rows);

    // Check if the input is positive
    if (rows <= 0) {
        printf("Invalid input. Please enter a positive number of rows.\n");
        return 1; // Exit with an error code
    }

    // Print the star pattern
    for (int i = 1; i <= rows; ++i) {
        for (int j = 1; j <= i; ++j) {
            printf("* ");
        }
        printf("\n");
    }

    return 0; // Exit successfully
}
