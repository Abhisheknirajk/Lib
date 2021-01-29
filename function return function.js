// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting}:${name}`);
//     }
// }

// const greetHey = greet('Hey');
// greetHey('Abhishek');


const greet = (greeting)=>{
    return (name)=>{
        console.log(`${greeting}:${name}`)
    }
}

const greetHey = greet('Hey');
greetHey('Abhishek');