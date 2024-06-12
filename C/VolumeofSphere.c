#include <stdio.h>
#include <math.h>

#define PI 3.14159  // Define a constant for pi

int main() {
    double radius, volume;

    // Input
    printf("Enter the radius of the sphere: ");
    scanf("%lf", &radius);

    // Check if the radius is non-negative
    if (radius < 0) {
        printf("Invalid input. Radius cannot be negative.\n");
        return 1;  // Exit with an error code
    }

    // Calculate the volume of the sphere
    volume = (4.0 / 3.0) * PI * pow(radius, 3);

    // Display the result
    printf("The volume of the sphere with radius %.2lf is: %.2lf\n", radius, volume);

    return 0;  // Exit successfully
}
