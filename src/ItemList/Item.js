const tablas=[
    {id:1, foto:"../public/FisTail cruiser.jpg", nombre:"Cruiser Fishtail", precio: 22000, stock:10},
    {id:2, foto:"../public/Mini Cruiser.png", nombre:"Mini Cruiser", precio: 16000, stock:10},
    {id:3, foto:"../public/surfskate classic.jpg", nombre:"Surfskate Classic", precio: 27000, stock:10},
    {id:4, foto:"../public/Surfskate Fishtail.jpg", nombre:"Surfskate Fishtail", precio: 22000, stock:10},
    {id:5, foto:"../public/Longboard Hopper.png", nombre:"Longboard Hopper", precio: 29000, stock:10},
    {id:6, foto:"../public/Longfloreado.png", nombre:"Longboard Floreado", precio: 25000, stock:10},
];

export const getFetch = new Promise((resolve,reject)=>{
    let condicion = true;
    if(condicion){
        setTimeout(()=>{
            resolve(tablas)
        },2000)
    }else{
        reject("error")
    }
})