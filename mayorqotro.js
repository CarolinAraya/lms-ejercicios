const max = (A, B, C) => {

    //var mayor;
    
      return A > B
              ? C > A ? C : A
              : C > B ? C : B;
     /*
        if (A > B) {
            mayor = A;
        } else {
            mayor = B;
        };
    
        if (C > mayor){
            mayor = C;
        }
     return mayor;   */
    }
    