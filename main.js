import { getData } from "./utils.js";
import { apiKey } from "./apiKey.js";
let page=1
const url=`https://api.unsplash.com/search/photos?client_id=${apiKey}&page=`
let qString='&query='
getData(url+page+qString,renderImages)
document.querySelector('.bsrc').addEventListener('click',search)

function search(){
    qString+=document.querySelector(".search").value
    console.log(qString);
    getData(url+page+qString,renderImages)


}
document.querySelector('.del').addEventListener('click',del)
function del(){
    qString=document.querySelector(".search").innerHTML="&query="
    getData(url+page+qString,renderImages)
    location.reload()

}
function renderImages(data){
    document.querySelector('.loading').style.display='none'
    console.log(data);
    data.results.forEach(obj=>{
        const imageElement = document.createElement('img');
        imageElement.src=obj.urls.small
        imageElement.alt=obj.alt_description
        document.querySelector('.image-gallery').appendChild(imageElement);
        let search = document.querySelector(".search").value/*qString.valueOf(`&query=${".search"}`)*/
    })
    console.log(page);
    page++
   
   

window.addEventListener('scroll',handleScroll)
function handleScroll(){
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-200){
        document.querySelector('.loading').style.display='block'
        getData(url+qString,renderImages)

    }
   
}

}