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
        if (index == 0) {
            console.log(`item: ${item}, index: ${index}`)
            let firstComb = 0;

            for (let i=0;i<k;i++) {
                firstComb +=ls[i] 
                
             }
             console.log(firstComb)
        }

    }
    ls.forEach(myfunc);
}
sumCombinations(3, [50, 55, 57, 58, 60]) 


//162,163,165
