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
function gotofamousmountain(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('some accident happend');
        },1000);
    })
}


    async function fun1(){
        try{
            const msg1 = await buyacar();
            console.log(msg1);
            const msg2 = await planatrip();
            console.log(msg2);
            const msg3 = await gotofamousmountain();
        }
        catch(error){
            console.log(error);
        }
     

    }



fun1();
