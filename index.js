// Code your solutions in this file

function writeCards(nameArray, event){
    let thankYouCards = []
    for (let i = 0; i < nameArray.length; i++){
        thankYouCards.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown( input){
    while (input > 0) {
        console.log(input);
        input -= 1
    }
    console.log(input);
}