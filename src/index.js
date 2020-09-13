let musics=['Roses','Ufo','Killer-Queen'];

let authors=['Saint JHN','Sneaky Sound System','Queen']



 let musicImg=window.document.getElementById('musicImg');
 let musicName=window.document.getElementById('name');
 let musicAuthor=window.document.getElementById('author');
let res;

 window.addEventListener('load', modifyBg())

   function modifyBg(){
     setInterval(function(){
     res= Math.floor(Math.random()*musics.length);
     musicImg.style.backgroundImage=`url("/src/images/${musics[res]}.png")`;
     },10000)  
      
   } 

   window.addEventListener('load', modifyFirstBg())
   
   function modifyFirstBg(){
      res= Math.floor(Math.random()*musics.length);
      musicImg.style.backgroundImage=`url("/src/images/${musics[res]}.png")`;
   }


   function chooseMusic(){
   window.removeEventListener('load',modifyBg())
   let chosenMusic= window.document.getElementById(musics[res]); 
   
   playMusic(chosenMusic,res)

      
  } 

   

   
   function playMusic(chosenMusic,res){ 
   window.removeEventListener('load',modifyBg())

      musicImg.style.backgroundImage=`url("/src/images/${musics[res]}.png")`; 
      
      musicName.innerText=musics[res].split('-').join(' '); 
      musicAuthor.innerText=authors[res];
     
      chosenMusic.play();

     
  } 




