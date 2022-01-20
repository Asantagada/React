export const boards=[
    {id:"1", foto:"./img/FisTailcruiser.jpg", nombre:"Cruiser Fishtail", precio: 22000, stock:10, categoria: "cruiser"},
    {id:"2", foto:"./img/MiniCruiser.png", nombre:"Mini Cruiser", precio: 16000, stock:10, categoria: "cruiser"},
    {id:"3", foto:"./img/surfskateclassic.jpg", nombre:"Surfskate Classic", precio: 27000, stock:10, categoria:"surfSkate"},
    {id:"4", foto:"./img/Surfskatefishtail.jpg", nombre:"Surfskate Fishtail", precio: 22000, stock:10, categoria: "surfSkate"},
    {id:"5", foto:"./img/LongboardHopper.png", nombre:"Longboard Hopper", precio: 29000, stock:10, categoria: "longboard"},
    {id:"6", foto:"./img/Longfloreado.png", nombre:"Longboard Floreado", precio: 25000, stock:10, categoria: "longboard"},
];

export const bringBoards = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve (boards)
    },2000)
});
