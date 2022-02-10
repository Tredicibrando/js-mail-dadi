
//EMAIL
let userMail = document.getElementById('email')
const buttonVai = document.getElementById('email_vai')
const mailUtente= 

buttonVai.addEventListener('click', function(){

    const mailUtente = userMail.value

    console.log(mailUtente)

    const mailArray = [
        'nicolosigiov@gmail.com', 
        'simone@boolean.com', 
        'giovanni@libero.it',
        'davide@yahoo.de'
        ]
    
        console.log(mailArray)
    
        let trovataMail = false;
        
        for (let i = 0; i < mailArray.length; i++) {
            
            
            if (mailUtente === mailArray[i] ){
                trovataMail = true; 
            } 
        }
        const stampa = document.querySelector('.success')

        if (trovataMail) {
            
            alert('Login effettuato con successo')
        }
            else {
                alert('i dati inseriti non sono corretti')
            }
        })

console.log(userMail)

//Dadi

const btnDadi = document.getElementById('btn_dado')

btnDadi.addEventListener('click' , function(){
    const playerInput = Math.floor (Math.random() *6 + 1);
    const pcInput = Math.floor (Math.random() *6 + 1);

    console.log(playerInput , pcInput)


    const punteggioPlayer = document.querySelector('.player')

    const punteggioPc = document.querySelector('.pc')
    

    if (playerInput > pcInput){
        //vince il giocatore
        console.log('complimenti hai vinto')
        punteggioPlayer.append( playerInput )
        punteggioPc.append( pcInput )

    }   else if ( playerInput < pcInput){
        //vince il pc
        console.log('sorry hai perso')
        punteggioPlayer.append( playerInput )
        punteggioPc.append( pcInput )

    } else {
        // pareggio
        console.log('pari')
        punteggioPlayer.append( playerInput )
        punteggioPc.append( pcInput )
    }


})
    
    





    
        
    
