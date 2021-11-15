const { areIntervalsOverlapping } = require('date-fns');

const numbers = [1, 2, 3, 4];

let resp = false;
for (let index = 0; index < numbers.length; index++) {
   const element = numbers[index];

   if (element % 2 === 0) {
      resp = true;
      break;
   }
}

console.log(resp);

const resp2 = numbers.some((element) => element % 2 === 0);
console.log('resp2', resp2);

const orders = [
   {
      customerName: 'Nicolas',
      total: 60,
      delivered: true,
   },
   {
      customerName: 'Zulema',
      total: 120,
      delivered: false,
   },
   {
      customerName: 'Santiago',
      total: 180,
      delivered: true,
   },
   {
      customerName: 'Valentina',
      total: 240,
      delivered: true,
   },
   {
      customerName: 'Nicolas',
      total: 240,
      delivered: false,
   },
];

const resp3 = orders.some((element) => element.delivered);
console.log('resp3', resp3);

const dates = [
   {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: 'Cita de trabajo',
   },
   {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: 'Cita con mi jefe',
   },
   {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: 'Cena',
   },
];

const newAppointment = {
   startDate: new Date(2021, 1, 1, 8),
   endDate: new Date(2021, 1, 1, 9, 30),
};

const isOverLap = (newDate) => {
   return dates.some((date) => {
      return areIntervalsOverlapping(
         {
            start: date.startDate,
            end: date.endDate,
         },
         {
            start: newDate.startDate,
            end: newDate.endDate,
         }
      );
   });
};

console.log('isOverLap', isOverLap(newAppointment));
