// call apply and bind
let name = {
    firstname:'Rana',
    lastname:'singh',
    printFullName:function(){
        console.log(this.firstname+" "+this.lastname);
    }
  
}
name.printFullName();

let name2 = {
    firstname:"Mahendra Singh",
    lastname:"Dhoni"
}

//function borrowing
name.printFullName.call(name2);
//here this will point to name2 object which we have passed as parameter