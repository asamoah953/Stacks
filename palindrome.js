// Palindrome is a word, phrase or sentence that will not change its spelling in its reverse order
// Egs: racecar :- when this word is reversed, it still remains as it was without changing.



//function named Palindrome to accept and perform the reverse order check, if the word will remain the same ot not
function Palindrome(word){

    //the array acting as a stack to collect each string of word.
    let wordStore = [];

    //loop to get each letter of the string
    for(let i= 0;i < word.length;++i){

        //adding each letter to the wordStore
        wordStore.push(word[i]);
    }

    //adding the each string in the reverse order
    let pal = "";
    while(wordStore.length){
        pal += wordStore.pop();
    }
    
    //using if condition to validate the palindrome
    if(pal == word){
        console.log("The word is a palindrome");
    }else{
        console.log("The word is not a palindrome");
    }
    
    return pal;
}


let result = Palindrome("racecar")