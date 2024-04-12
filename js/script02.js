let textArea = document.querySelector("#textArea");
let caratteriRimanenti = document.querySelector("#conteggio")
let erroriUtente = document.querySelector("#erroriUtente");
let erroriPassword = document.querySelector("#erroriPassword");
let post = document.querySelector("#post");
let btnTweet = document.querySelector("#bntTweet");

function scalaCaratteri(){
    let caratteriRimanenti = textArea.maxLength - textArea.value.length;
    conteggio.textContent = caratteriRimanenti;
  }

  let utenteLoggato = JSON.parse(localStorage.getItem("nuovoUtente"));

  console.log(utenteLoggato);


    class Tweet {
        constructor(contenuto,data){
            this.contenuto=contenuto;
            this.data=data;

        }
    }

    

    function aggiungiTweet(){
        let data= new Date();
        data = data.getTime();
        let nuovoTweet = new Tweet(textArea.value, data.value);
        if(utenteLoggato){
            utenteLoggato.tweets.push(nuovoTweet);
            localStorage.setItem("utenteLoggato", utenteLoggato)
          }
        localStorage.getItem("utenteLoggato"(2)).push(nuovoTweet);
        console.log(utenteLoggato);
    }
    
    
    






//  function stampaPost(event){
//    event.preventDefault();
//    post.innerHTML="";
   
   
//    if(tweet.trim() == ""){
//      post.innerHTML += "Il campo è vuoto, tweet non postabile"
//      textArea.value = "";
//     }else{
//       array.push(tweet);
//       post.innerHTML += array;
//       console.log(array);
//       textArea.value = "";
//       localStorage.setItem("tweet", array);
//   }
// }

textArea.addEventListener("input", scalaCaratteri);
btnTweet.addEventListener("click", aggiungiTweet);
// document.addEventListener('DOMContentLoaded', stampaPost);