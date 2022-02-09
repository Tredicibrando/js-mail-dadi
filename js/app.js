
let userMail = document.getElementById('input_email');
console.log(userMail)

const mailArray = [
    'nicolosigiov@gmail.com', 
    'simone@boolean.com', 
    'giovanni@libero.it',
    'davide@yahoo.de'
    ]

    console.log(mailArray)

    let trovataMail = false;
    
    for (let i = 0; i < mailArray.length; i++) {
        
        if (userMail === mailArray[i] ){
            trovataMail = true; 
        } 
    }
    const stampa = document.querySelector('.success')
    if (trovataMail){
        
        stampa.classList.add('active')
    
    } 
    
    





    
        
    
