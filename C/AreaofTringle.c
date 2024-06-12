#include <stdio.h>

float calculateTriangleArea(float base, float height) {
    return 0.5 * base * height;
}

int main() {
    float base, height;

    // Input
    printf("Enter the base of the triangle: ");
    scanf("%f", &base);

    printf("Enter the height of the triangle: ");
    scanf("%f", &height);

    // Check if the values are valid
    if (base <= 0 || height <= 0) {
        printf("Invalid input. Base and height must be positive numbers.\n");
        return 1; // Exit with an error code
    }

    // Calculate and display the area
    float area = calculateTriangleArea(base, height);
    printf("The area of the triangle with base %.2f and height %.2f is: %.2f\n", base, height, area);

    return 0; // Exit successfully
}
