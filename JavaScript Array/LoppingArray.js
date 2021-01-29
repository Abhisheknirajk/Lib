const movements = [200,450,-400,300,-650,-130,70,1300];

for(const movement of movements){
    if(movement>0){
        console.log(`You deposited ${movement}`)
    }else{
        console.log(`You Withdrawl ${Math.abs(movement)}`)
    }
}


//FOR EACH
console.log('------FOR-EACH--------')
movements.forEach(function(mov,index,array){
    if(mov>0){
        console.log(`${index}:You deposited ${mov}`)
    }else{
        console.log(`${index}:You Withdrowl ${Math.abs(mov)}`)
    }
})


//FOR OF ENTRIES

console.log('-----Entries-------');

for(const [i,movement] of movements.entries()){
    if(movement>0){
        console.log(`${i}:You Deposited ${movement}`)
    }else{
        console.log(`${i}:You Withdrowl ${Math.abs(movement)}`)
    }
}

console.log('----Fruits----')
const fruits = ["Banana","Apple","Mango","Litchi"];

fruits.forEach(function(f){
    console.log(f)
})