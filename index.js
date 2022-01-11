
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}


function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

(function (baseNumber) {
    return baseNumber + 3;
})(2);

function outer(greeting, msg= "It's a fine day to learn"){
    const innnerFunction=function (name, lang="Python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innnerFunction("student", "JavaScript");
}

console.log(outer("hello"));

const array= (function (thingToAdd) {
    const base=3;
    return [
        function (){
            return base + thingToAdd;
        },
        function () {
            return base;
        },
    ];
})(2);

console.log(array[0]());

function wrapAdjective (flair="*"){
    return function(adjective="special"){
        return `You are ${flair}${adjective}${flair}!`;
    };
}
const encouragingPromptFunction = wrapAdjective("!!!");

console.log(wrapAdjective("#")("a dedicated programmer"));

console.log(saturdayFun());  
