// Your grandfather criticizes your overuse of the word 'like'; claiming that it makes up more than 5% of total words 
// you speak. You argue that it is much lower than this and so to settle the debate, you have been fitted with 
// a recorder that stores every word you say as a string in an array.

// Your task is to make an algorithm that returns true if 'like' accounts for more than 5% of words in the array,
// otherwise false(if no words are spoken, return false also).

function checkWords(arrStr){
    let returnLikes = 0
    for(let i = 0; i < arrStr.length; i++){
        if(arrStr[i] === 'like'){
            returnLikes++
        }
    }
    return returnLikes / arrStr.length > 0.05
}
alert(checkWords(['he', 'like', 'you', 'very', 'much']))















                    // SOLUTION 1
// function evalLikes(words){
//     // declare a variable to hold the number of 'like'
//     let likeCount = 0
//     // loop through the array, checking for likes using 'if' conditional
//     for(let i = 0; i < words.length; i++){
//         if(words[i].toLowerCase() === 'like'){
//             likeCount++
//         }
//     }
//     // checking for the % of 'like'
//     return likeCount / words.length > 0.05
// }
// alert(evalLikes(['i', 'like', 'your', 'style']))
                    // SOLUTION 2
// function countLikes(arrStr){
//     return arrStr.filter(str => str.toLowerCase() === 'like').length / arrStr.length * 100 > 5
// }
// alert(countLikes(['i', 'like', 'your', 'style']))