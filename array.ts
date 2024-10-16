//1
//Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. Do not move the 3's, but every other number may move. The array contains the same number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.


// function fix34(arr: number[], source: number = 4, target: number = 3): number[]{

//     let sourceIndex = arr.indexOf(source);
//     let targetIndex = arr.indexOf(target);

//     if(sourceIndex <= -1 || targetIndex <= -1){
//         return arr;
//     }
//     if(Math.abs(sourceIndex - targetIndex) <= 1){
//         return arr;
//     }arr.splice(sourceIndex, 1);
//     if(sourceIndex < targetIndex){
//         arr.splice(targetIndex - 1, 0, source);
//     }else{
//         arr.splice(targetIndex + 1, 0, source);
//     }

//     return arr;
// }
// const arrays = [3, 2, 5, 6, 4, 1];
// const result = fix34(arrays);
// console.log(result);









//2
//(This is a slightly harder version of the fix34 problem.) Return an array that contains exactly the same numbers as the given array, but rearranged so that every 4 is immediately followed by a 5. Do not move the 4's, but every other number may move. The array contains the same number of 4's and 5's, and every 4 has a number after it that is not a 4. In this version, 5's may appear anywhere in the original array.


function fix45(arr: number[]): number[]{
    const result: number[] = [...arr];
    const themFive: number[] = [];
    const themOthers: number[] = [];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 5){
            themFive.push(arr[i]);
        }else if(arr[i] !== 4){
            themOthers.push(arr[i]);
        }
    }

    let otherIndex = 0;
    let fiveIndex  = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 4){
            result[i + 1] = 5;
            fiveIndex++;
        }else if(arr[i] !== 5){
            if(result[i] !== 5){
                result[i] = themOthers[otherIndex++];
            }
        }
    }
    return result;
}
const arr = [5, 4, 1, 4, 5, 5, 3, 4];
const result = fix45(arr);
console.log(result); 