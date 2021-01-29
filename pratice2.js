const flight = 'LH1234';
const abhishek = {
     name:"Abhishek Niraj",
     passport:247344282
}

const checkIN = function(flight,passanger){
    flightNum = 'LH999';
    passanger.name = 'Mr'  + passanger.name;
    if(passanger.passport === 247344282){
        alert('Check In')
    }else{
        alert("Wrong Passport")
    }

}

checkIN(flight,abhishek);
console.log(flight);
console.log(abhishek.name);
console.log(abhishek);