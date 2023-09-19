console.log('Person1 : show the tickets');
console.log('Person2 : show the tickets');

const promisWifeBringingTickets = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('tickets');
    },3000)
})

console.log("Person4: show the tickets");
console.log("Person5: show the tickets");

 const getPopcorn = promisWifeBringingTickets.then((t)=>{
    console.log(' Wife :I got the tickets');
    console.log("Husband:we should go in")
    console.log("Wife: No i m hungry");
     return new Promise((resolve,reject)=>{
        resolve(`${t} and popcorn`);
    })
})
const getButter = getPopcorn.then((t)=>{
    console.log(" Husband :I got some popcorn");
    console.log("Husband :We should go in");
    console.log("Wife :No I need some butter on my popcorn")
    return new Promise((resolve,reject)=>{
        resolve(` Enjoying movie with :${t} and butter`)
    })
})
getButter.then((t)=>console.log(`${t}`));

