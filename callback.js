// asyn await
// the promise hell further can be rsolve by the use of async await

function buyacar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(' bought a car maecedes-benz')
        },2000)
    })
}
function planatrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('lets go to manali')
        },1000)
    })
}
async function fun1(){
    const msg1 = await buyacar();
console.log(msg1);
const msg2 = await planatrip();
console.log(msg2);
}
fun1();
