// call apply and bind
let name = {
    firstname:'Rana',
    lastname:'singh',
}

// Best practice when we have to use any particular function on repeated basis
//we need to keep function outside of 
let printFullName = function(){
    console.log(this.firstname+" "+this.lastname);
}
printFullName.call(name);

let name2 = {
    firstname:"Mahendra Singh",
    lastname:"Dhoni"
}

//function borrowing
printFullName.call(name2);
