let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlx.mp3");
     x.setAttribute("autoplay","autoplay");
let i =0
let str = '新年快乐呀！羽娴<在我看来，你真的是个很优秀的女孩<我不知道怎么表达我对你的感情，但我想告诉你是在我的青春里你也是一个很惊艳的人。548天的时间不长，但我对你的感情绝对没有掺杂任何虚假'
let strp = ''
function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  //
}, 5500);  //
// 
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()
})