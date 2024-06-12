#include <stdio.h>

int main() {
    int marks[3]; 

    printf("Enter Math: ");
    scanf("%d", &marks[0]);

    printf("Enter Computer: ");
    scanf("%d", &marks[1]);

    printf("Enter English: ");
    scanf("%d", &marks[2]);

    printf("Math = %d, Computer = %d, English = %d\n", marks[0], marks[1], marks[2]);

    return 0; 
}
