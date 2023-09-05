// callback hell
// function buyacar(callback1,callback2){
//     setTimeout(()=>{
//         console.log('buy a car')
//         callback1(callback2);
//     },1000);
// }
// function planatrip(callback){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('plan a trip to manali')
//             callback();
//         },1000);
//     })
  
// }
// function reachedmanali(){
//     setTimeout(()=>{
//         console.log('reached manali');
//     },1000)
// }
//buyacar(planatrip , reachedmanali);


// now to solve the problem of callback hell promises came into the picture
// function buyacar(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('buy a car')
//         },1000);
//     })
// }
// function plantrip(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('lets go to the manali');
//         },2000)
//     })
// }
// buyacar().then((msg1)=>{
//     console.log(msg1);
//     plantrip().then((msg2)=>{
//         console.log(msg2);
//     })
// });
// now this also will not make our code clean , it will create a promis hell
// so to resolve that a new practice of AWAIT was taken into account
