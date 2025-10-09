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
     
             