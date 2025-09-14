#include <stdio.h>

int main(){
    int lo = 0;
    int hi = 1000;

    printf("\nPICK A NUMBER BETWEEN 0 AND 1000 :)\n\n");

    while (lo <= hi) {
        int mid = (hi + lo) / 2;
        printf("My guess: %d\n", mid);
        printf("Enter 1 if correct,\n      2 if your number is smaller,\n      3 if your number is larger\n");

        int x;
        scanf("%d", &x);

        if (x == 1) {
            printf("Yay! I guessed your number %d\n", mid);
            return 0;   // exit 
        } else if (x == 2) {
            hi = mid - 1;
        } else if (x == 3) {
            lo = mid + 1;
        } else {
            printf("Invalid input! Please enter 1, 2, or 3.\n");
        }
    }

    printf("Oopsies something went wrong.\n");
    return 0;
}
