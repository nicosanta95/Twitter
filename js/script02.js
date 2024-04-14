let textArea = document.querySelector("#textArea");
let caratteriRimanenti = document.querySelector("#conteggio")
let erroriUtente = document.querySelector("#erroriUtente");
let erroriPassword = document.querySelector("#erroriPassword");
let post = document.querySelector("#post");
let btnTweet = document.querySelector("#bntTweet");
let btnLogout = document.querySelector("#btnLogout");

function scalaCaratteri(){
    let caratteriRimanenti = textArea.maxLength - textArea.value.length;
    conteggio.textContent = caratteriRimanenti;
  }

  let utenteLoggato = JSON.parse(localStorage.getItem("nuovoUtente"));




    class Tweet {
        constructor(contenuto,data){
            this.contenuto=contenuto;
            this.data=data;

        }
      
    }

        
    
    
 

    function aggiungiTweet(){
    let data = new Date;
    let giorno = data.getDate();
    let mese = data.getMonth() +1;
    let anno = data.getFullYear();
    let orario = data.getHours();
    let minuti = data.getMinutes();
    let secondi = data.getSeconds();
    let dataOraString = `${giorno}/${mese}/${anno} ${orario}:${minuti}:${secondi}`;
    let nuovoTweet = new Tweet(textArea.value, dataOraString); 
        utenteLoggato.tweets.push(nuovoTweet);
        localStorage.setItem("nuovoUtente", JSON.stringify(utenteLoggato));
        post.innerHTML += `Il tweet di: <br> ${nuovoTweet.data} <br> ${nuovoTweet.contenuto} <br>`; 
        textArea.value="";
         
          
           
        }

        btnTweet.addEventListener("click", aggiungiTweet);
        
        
        
        
        function logout(){
            localStorage.clear();
        }
        
        

    
    
// function aggiungiTweet() {
//     let data= new Date();
//     data = data.getTime();
//     utenteLoggato.push(arrayOgg);                                       
// }
   
    






//  function stampaPost(event){
//    event.preventDefault();
//    post.innerHTML="";
   


textArea.addEventListener("input", scalaCaratteri);
btnLogout.addEventListener("click", logout);
//  document.addEventListener('DOMContentLoaded', stampaPost)