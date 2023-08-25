let countEl=document.getElementById("count-el");
let count=0
function increment(){
   count+=1
    countEl.innerText=count
}
function save(){
    let count12=document.getElementById("people")
    count12.innerText=count12.innerText+"-"+count
    console.log(count12)
    count=0
    countEl.innerText=0
  }

