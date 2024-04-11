let nickname = document.querySelector("#nickname");
let password = document.querySelector("#password");
let btnLogin = document.querySelector("#bntRegistrati");
let logoX = "./img/logouccellino.jpg";


function controlloUsername() {
  const regex = /^.{4,15}$/; // Regex che corrisponde a stringhe di lunghezza tra 4 e 15 caratteri inclusi
  nickname = document.getElementById("nickname"); // Ottieni l'elemento input del nickname

  if (nickname.value.match(regex)) {
        return true; // Salva il nickname nel localStorage se è valido
  } else {

        erroriUtente.innerHTML += "Inserire dai 4 ai 15 caratteri."
       


  }
}

function controlloPassword() {
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/; 
  password = document.getElementById("password");
  if (password.value.match(regexPassword)) {
        return true;
  } else {
        erroriPassword.innerHTML += "Inserire almeno 1 lettera minuscola,<br> 1 maiuscola,<br> 1 numero,<br> 1 carattere speciale <br> Minimo 8 caratteri."
       
        
  }
}

function registraUtente(){
    let utenteOk = controlloUsername();
    let passwordOk = controlloPassword();
    if(utenteOk && passwordOk){
        // console.log(nickname, password);
        let nuovoUtente = new Utente(nickname.value, password.value,[]);
        localStorage.setItem("nuovoUtente", JSON.stringify(nuovoUtente));
              
       
    }else{
        console.log("Errore");
    }
}

let nicknameUtente = localStorage.getItem("nickname");



class Utente {
  constructor(nome, password, tweets){
      this.nome=nome;
      this.password=password;
      this.tweets=tweets;

      }

  }

  



btnLogin.addEventListener("click", registraUtente);

