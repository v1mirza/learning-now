#include<stdio.h>
int main(){
int pass;

printf("Enter your password ");
scanf("%d", &pass) ;

if ( pass == 1234)
{
    printf("Your pass is correct ");
 
}

else  
{
    printf("Your pass is incorrect ");
    printf("Click here to reset ") ;
}
return 0;
}

