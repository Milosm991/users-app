

export const emailValidation = (email) => {
    
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if ( re.test(email) ) {
            return true
        }
}

export const validation = (email) => {
    const isEmailOk = emailValidation(email)
    const getEmail = localStorage.getItem('email')

    if(!isEmailOk){
        return false
    }else if(getEmail === email){
        return true
    }else{
        localStorage.setItem('email', email)
        return true
    }
}



