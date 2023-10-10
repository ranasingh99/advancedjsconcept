document.getElementById('btn').addEventListener("click",makerequest);

function makerequest(){
    console.log("Button Clicked");
    axios.get('https://dummyjson.com/products1/2')
    .then((res)=>{
        console.log(res);
        console.log(res.data);
    }).catch((error)=>{
        console.log(error);
    }).then((msg)=>console.log('ye har hal m print hoga hi hoga'))
}