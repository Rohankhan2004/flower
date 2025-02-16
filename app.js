const p = document.querySelector("#para");
const masjidImage = "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg"
const chandImage = "https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg"

const image = document.querySelector("#image");


function values(){
    // console.log(Math.ceil(Math.random()*2));

    if(Math.ceil(Math.random()*2) === 2){

        p.innerHTML = "You Won The Toss"
        image.src = chandImage
    }else{
        
        p.innerHTML = "You Won't Won The Toss"
        image.src = masjidImage
    }
}
function second(){
    // console.log(Math.ceil(Math.random()*2));


    if(Math.ceil(Math.random()*2) === 1){

        p.innerHTML = "You Won The Toss"
        image.src = masjidImage 


    }else{

        p.innerHTML = "You Won't Won The Toss"
        image.src = chandImage

    }

}