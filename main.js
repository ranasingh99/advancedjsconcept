// most important interview asked question


// function fun(){
//     setTimeout(function(){
//         console.log('welcome to the advanced closure');
//     },2000);
// }
// fun();
// console.log('Alok');

function test(){
   
    for(var i =1;i<=5;i++){
        setTimeout(function (){
            console.log(i)
        },i*1000);
        
    }
}
//test();
// so the above functionn will print 6 for the 5 times in row ,
// we can resolve the problem using LET in place of VAR becoz let are block scoped so ,
// settimeout will get each time a new copy of variable.

function test1(){
    for(let i =1;i<=5;i++){
        setTimeout(function (){
            console.log(i)
        },i*1000);
    }
}
test1();