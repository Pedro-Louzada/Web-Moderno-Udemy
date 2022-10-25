function tiposDeTriangulo (x, y, z) {
     if ( x == y && y ==z ){
        console.log ('Este triângulo é equilátero!')
     }
         else if (x == y || y == z || x ==z ) {
            console.log ('Este triângulo é isósceles!')
            }

        else {
            console.log ('Este triângulo é escaleno!')
        }
        }
   
tiposDeTriangulo (3,3,3)
tiposDeTriangulo (2,3,3)
tiposDeTriangulo (3,5,6)

// como o professor fez 

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));
