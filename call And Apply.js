const shahara = {
  name:'Shahara',
  iatCode:'LH',
  bookings:[],
  book(flightNum,name){
    console.log(`${name} booked on ticket ${this.name} flight:${this.iatCode}${flightNum}`)
    this.bookings.push(`flight:${this.iatCode} ${flightNum} name`)
  }
  
}
shahara.book(23,'AbhishekNiraj')
shahara.book(34,'Sanjay');
console.log(shahara)

const red = {
    airline:'Red',
    iatCode:'BH',
    bookings:[]
}

const book = shahara.book;
//does not work
// book(45,'Niraj')

book.call(red,45,'Niraj')
console.log(red)


const marcopolo = {
    name:'Marcoplo',
    iatCode:'MH',
    bookings:[]
}

book.call(marcopolo,67,'Hina');
console.log(marcopolo)
