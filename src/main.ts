// let chooseBestSum = (t: number, k: number, ls: number[]): number | null => {

//     return 2
// }


// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

//Example
//ls = [50, 55, 57, 58, 60]. /3
// [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60]
//162,163,165

//ls = [x, y, z, a, b]
// [x,y,z],[x,y,a],[x,y,b],
// [x,z,a],[x,z,b],
// [x,a,b],

// [y,z,a],[y,z,b],
// [y,a,b],

// [z,a,b]


//1.-Create a function that does what you have on each of the lines above and call it for every letter in the array 
//Stop when the the index of your base letter minus the lenght of the array is less than the k value (how many numbers in each group)

let sumCombinations = (k: number, ls: number[]) => {
    function myfunc(item: number, index: number) {
        //Make sure the function ends when the index get to the last digit who can make a combination with number k
        if (index < ls.length - k + 1) {
            //------------------------------------------------------------------------------------------------------
            if (index == 0) {
                //saca un array de los primeros 2 digitos y sumalos 
                let base = ls.slice(0, k - 1);
                let rest = ls.slice(k - 1, ls.length)
                console.log(base, rest)
                for (let item of rest) {
                    console.log(base.reduce((a, b) => a + b, 0) + item)
                }
                // // obtener todas las sumas que empiecen con x
                // // let firstComb = 0;
                // for (let i=0;i<k-1;i++) {
                //     // item += ls[i]
                //     item += ls[i+1]

                //  }
                //  console.log(item)

            }
            // console.log(`item: ${item}, index: ${index}`)
            //------------------------------------------------------------------------------------------------------
        }
        //llamar a mi funcion con un nuevo array (que sera sin el primer digito)
        //newArray.forEach(myFunc)


    }
    ls.forEach(myfunc);
}
sumCombinations(3, [50, 55, 57, 58, 60])

// [50,55,57],[50,55,58],[50,55,60],
//162,163,165


// **k debe ser menor o igual a ls (si es igual la respuesta es la suma de todos los elementos del array)