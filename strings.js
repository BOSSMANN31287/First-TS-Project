//1
//Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).
// function isVsnot(str:string): boolean {
//     let isCount = 0;
//     let notCount = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'i' && str[i+1] === 's' ) {
//             isCount++;
//         }else if(str[i] === 'n' && str[i + 1] === 'o' && str[i + 2] === 't'){
//             notCount++;
//         }
//     }
//     if(notCount === isCount){
//         return true;
//     }return false;
// }
// console.log(isVsnot("Kelly is not going to flop but he is going to be a TechGenius"));
//2
//We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.
// function ghappy (word: string): boolean{
//     let isHappy: boolean = false;
//     for(let i = 0; i < word.length; i++){
//         if(word[i] === 'g'){
//             const leftG = (word [i-1] === 'g');
//             const rightG = (word [i + 1] === 'g');
//             if(!leftG && !rightG){
//                 isHappy = false
//             }else{
//                 isHappy = true
//             }
//         }
//     }
//     return isHappy;
// }
// console.log(ghappy("xxggxx"));
// console.log(ghappy("xxgxx"));
// console.log(ghappy("xxggygxx"));
//3
//Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.
// function maxBlock(str: string): number{
//     let maxStr = 1;
//     let currentStr = 1;
//     for(let i = 0; i < str.length; i ++){
//         if(str[i] === str[i + 1]){
//             currentStr++
//         }else{
//             maxStr = Math.max(maxStr, currentStr);
//             currentStr = 1;
//         }
//     }
//     maxStr = Math.max(maxStr, currentStr)
//     return maxStr;
// }
// console.log(maxBlock("OOOboy"));
// console.log(maxBlock("gkkkk"));
//4
// Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".
// function withoutString(base:string, remove: string): string {
//     const lowerBase = base.toLowerCase();
//     const lowerRemove = remove.toLowerCase();
//     const result = lowerBase.split(lowerRemove).join("");
//     return result;
// }
// const baseString = "Kelly, willy";
// const removeString = "lly";
// const result = withoutString(baseString, removeString);
// console.log(result);
//5
// Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)
// function countYZ(str: string): number{
//     let count = 0;
//     let word = false;
//     for(let i = 0; i < str.length; i++){
//         const char = str[i].toLowerCase();
//         if(char >= 'a' && char <= 'z'){
//             word = true;
//         }else{
//             if((str[i - 1].toLowerCase() === 'y' || str[i - 1].toLowerCase() === 'z')){
//                 count++;
//             }word = false;
//         }
//     }
//     if((str[str.length - 1].toLowerCase() === 'y' || str[str.length - 1].toLowerCase() === 'z')){
//         count++;
//     }
//     return count;
// }
// console.log(countYZ("Heavy fez but glory yay"));
