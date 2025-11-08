int main()

{   int n , rev = 0;
    printf("Enter a number : ");
    scanf("%d", &n);
    
    for(; n > 0; n /=10){
        rev = rev * 10 + (n%10);
    }
    printf("%d", rev);

    return 0;
}

int main()

{  
    int n ;
    printf("Enter the number");
    scanf("%d", &n);
    for(int i = 1;i <=n ; i++){
        for(int j = 1; j <= i; j++){
            printf("*");
        }
        printf("\n");
    }
    return 0;
}

//print star tringle 
int main()

{  
    int n ;
    printf("Enter the number");
    scanf("%d", &n);
    for(int i = 1;i <=n ; i++){
        for(int j = 1; j <= i; j++){
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}


int main()

{  
    int n ;
    printf("Enter the number\n");
    scanf("%d", &n);
    for(int i = 1;i <=n ; i++){
        for(int s = 1; s <= n - i; s++){
            printf(" ");
        }
        for(int j = 1; j <= 2*i -1; j++){
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
int main()
// {
//     int n;
//     printf("Enter the number : ");
//     scanf("%d", &n);
    
//     for(int i = 1 ; i <= 2*n-1 ; i++){
//         if(i <=n){
            
//         for(int s =1 ; s < n-i ; s++){
//             printf(" ");
//         }
//         for(int j = 1 ; j <= 2*i-1; j++){
//             printf("*");
//         }
//         }else{
//             for(int s = n; s <= i+1 ; s++){
//             printf(" ");
//         }
//         for(int j = 1 ; j <= 2*i-1; j++){
//             printf("*");
//         }
            
//         }
//         printf("\n");
//     }

//     return 0;;
// }


int main()
{
    
    int n;
    printf("Enter the number: ");
    scanf("%d", &n);
    
    for(int i =1; i <=n ;i++){
        for(int s = 1; s <= n-i ; s++){
            printf(" ");
        }
        for(int j =1 ; j <=i ; j++){
            printf("%d ",j);
        }
        printf("\n");
    }

        
    return 0;
}


int main()
{
    
    int n;
    printf("Enter the number: ");
    scanf("%d", &n);
    
    for(int i =1; i <=n ;i++){
        for(int s = 1; s <= n-i ; s++){
            printf(" ");
        }
        for(int j =1 ; j <=i ; j++){
            printf("%d ",j);
        }
        printf("\n");
    }


    return 0;
}
// primitive data type

// int  (short(signed , unsigned,), int(signed, unsigned) , long(signed, unsigned))

//char(signed, unsigned) --1 byte

//float (float, double,longdouble )

//void --
     
#include <stdio.h>

int main()
{
    // int arr[5];
    // printf("Enter 5 elements ");
    // for(int i = 0; i < 5; i++){
    //     scanf("%d", &arr[i]);
    // }
    // printf("Reverse Array \n");
    // for(int i = 4;  i >= 0; i--){
    //     printf("%d \n", arr[i]);
    //     // printf("%d",arr[0]);
    // }
    
    
    
    // int arr[6] = {1,4,7,8,10,11};
    // int even = 0, odd = 0;
    
    // for(int i = 0; i < 6; i++){
    //     if(arr[i]%2 == 0){
    //         even++;
    //     }else{
    //         odd++;
    //     }
    // }
    // printf("Even count : %d\n Odd count : %d", even, odd);
    // return 0;
}