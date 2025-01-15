const gifts = ["coche", "trompo", "yoyo", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {

    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }
    return findGift(gifts, giftName, index + 1);
}

let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));

giftToFind = "Gameboy";
console.log(findGift(gifts, giftToFind)); 

giftToFind = "Pelota";
console.log(findGift(gifts, giftToFind)); 

giftToFind = "Avión";
console.log(findGift(gifts, giftToFind)); 
