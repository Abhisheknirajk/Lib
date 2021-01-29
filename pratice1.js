   const bookings  = [];
   const createBooking = function(flightNum,numPassanger,price){
       numPassanger = numPassanger || 34;
       price = price || 45;
       const booking = {
           flightNum,
           numPassanger,
           price
       }
       console.log(booking);
       bookings.push(booking)
   }

   createBooking("Bh123", 3, 23);