#include <stdio.h>

int main() {
    double length, width, area;

    // Input
    printf("Enter the length of the rectangle: ");
    scanf("%lf", &length);

    printf("Enter the width of the rectangle: ");
    scanf("%lf", &width);

    // Check if the length and width are non-negative
    if (length < 0 || width < 0) {
        printf("Invalid input. Length and width must be non-negative.\n");
        return 1; // Exit with an error code
    }

    // Calculate the area of the rectangle
    area = length * width;

    // Display the result
    printf("The area of the rectangle with length %.2lf and width %.2lf is: %.2lf\n", length, width, area);

    return 0; // Exit successfully
}
