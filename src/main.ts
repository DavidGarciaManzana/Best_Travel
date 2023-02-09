let sumCombinations = (k: number, ls: number[]) => {
    let allSums: number[] = [];
    function myfunc(item: number, index: number) {
        //Make sure the function ends when the index get to the last digit who can make a combination with number k
        if (index < ls.length - k + 1) {
            //------------------------------------------------------------------------------------------------------

            //saca un array de los primeros 2 digitos y sumalos 
            //ls = [x, y, z, a, b]
            //[50, 55, 57, 58, 60]
            let base = ls.slice(index, index + k - 1);
            let rest = ls.slice(index + k - 1, ls.length)
            // console.log(base, rest)

            let line = (base: number[], rest: number[]) => {
                for (let item of rest) {
                    allSums.push(base.reduce((a, b) => a + b, 0) + item)
                }
            }
            while (rest.length >= 1) {
                line(base, rest)
                base.pop(), base.push(rest[0]), rest.shift()
            }
            // line(base,rest)
            // console.log(base.pop(),base.push(rest[0]),base)
            // console.log(rest.shift())
            // console.log(rest)
            // line(base,rest)
            // // obtener todas las sumas que empiecen con x
            // // let firstComb = 0;
            // for (let i=0;i<k-1;i++) {
            //     // item += ls[i]
            //     item += ls[i+1]

            //  }
            //  console.log(item)}


            // console.log(`item: ${item}, index: ${index}`)
            //------------------------------------------------------------------------------------------------------
        }
        //llamar a mi funcion con un nuevo array (que sera sin el primer digito)
        //newArray.forEach(myFunc)


    }

    ls.forEach(myfunc);
    return allSums;
}
//.sort(function (a,b) {return b - a})
//.sort(function (a,b) {return a - b})
let chooseBestSum = (t: number, k: number, ls: number[]): number | null => {
    // let i = 0;
    if (ls.length == k) {
        return ls.reduce((a, b) => a + b, 0) < t ? ls.reduce((a, b) => a + b, 0) : null
    } else if (k==1) { 
        for(let element of ls.sort(function (a,b) { return b - a })){
            if(element <= t) {
                // console.log(element)
                return element
            }
        }
        return null;
    }
    else {
        console.log(`${sumCombinations(k, ls).sort(function (a, b) { return a - b}).reverse()}`)
        console.log('Numero de comb: '+sumCombinations(k, ls).length)
        for (let element of sumCombinations(k, ls).sort(function (a, b) { return a - b }).reverse()) {
            if (element <= t) {
                // i=element
                // console.log(element)
                return element

            }
        }
        
        return null
    }
    
}
// console.log(chooseBestSum(174, 3, [50, 55, 57, 58, 60]));
// console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));
// console.log(chooseBestSum(163, 3, [50]));
// console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));
// console.log(chooseBestSum(880, 8, [
//     100, 76, 56, 44, 89,
//     73, 68, 56, 64, 123,
//     2333, 144, 50, 132, 123,
//     34, 89
// ]));
// console.log(chooseBestSum(331, 1, [
//     91, 74, 73, 85,
//     73, 81, 87
// ]));
// console.log(chooseBestSum(430, 8,[
//     100,  76, 56,  44,  89,
//      73,  68, 56,  64, 123,
//    2333, 144, 50, 132, 123,
//      34,  89
//  ]));
console.log(chooseBestSum(880, 8,[
    100,  76, 56,  44,  89,
     73,  68, 56,  64, 123,
   2333, 144, 50, 132, 123,
     34,  89
 ]));
 []


// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

//Example
//ls = [50, 55, 57, 58, 60]. /3
// [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60]
//162,           163,        165,      165,        167      168     y    170        172        173   z   175

//ls = [x, y, z, a, b]
// [x,y,z],[x,y,a],[x,y,b],      [x,y] [z,a,b]
// [x,z,a],[x,z,b],              [x,z] [a,b]
// [x,a,b],                      [x,a] [b]

// [y,z,a],[y,z,b],              [y,z] [a,b]
// [y,a,b]                       [y,a] [b]

// [z,a,b]                        [z,a][b]


//1.-Create a function that does what you have on each of the lines above and call it for every letter in the array
//Stop when the the index of your base letter minus the lenght of the array is less than the k value (how many numbers in each group)


// sumCombinations(3, [50, 55, 57, 58, 60])

// [50,55,57],[50,55,58],[50,55,60],
//162,163,165


// **k debe ser menor o igual a ls (si es igual la respuesta es la suma de todos los elementos del array)