console.log("**** BLAST TV QUIZ ****");

interface KeyValuePair{
    character:string,
    value:number
}

let list:KeyValuePair[] = [];
let alphapet:string[] = ['A','B','C','D','E','F','G','H','I','J','K','L',
'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// O = 12
// R = 15 hint
let item:KeyValuePair;

let charVal = 24;

for(let i:number = 0; i<26; i++){

    if(charVal > 26){
        charVal = 1
    }

    item = {
        character:alphapet[i],
        value:charVal
    }

    list.push(item);
    charVal++;

}

console.log("\n\n");

// -1 will be used as a new line seperator and 0 will be used as a space
let chewedNumList:(number)[] = [26,15,12,26,12,25,12,17,-1,26
,5,2,20,2,1,-1,10,22,0,10,24,17,26,5,-1,11,12,17,2,16];

let result:string = "";

chewedNumList.forEach(element => {

    if(element == 0){
        result+=" ";
    }
    else if(element == -1){
        result+="\n";
    }
    else{
        list.forEach(item => {

            if(item.value == element){
                result+=item.character;
            }
    
        });
    }
    
    
});


console.log(result);
