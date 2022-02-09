
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

        if (trovataMail){
            
            alert('Login effettuato con successo')
            
        } 
})

console.log(userMail)


    
    





    
        
    
