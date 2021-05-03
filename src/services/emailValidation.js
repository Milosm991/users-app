import { error_data, phone_error } from './notifications.js'

export const emailValidation = (email) => {
    
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if ( re.test(email) ) {
            return true
        }
}

export const checkFormFields = ( name, email, id, street, username, phone, web, company ) => {
    if( name !== undefined && 
        email !== undefined && 
        id !== undefined && 
        street !== undefined && 
        username !== undefined &&
        phone !== undefined &&
        web !== undefined && 
        company !== undefined){
            return true
        } else {
            return false
        }
}

export const validURL = (web) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i');

    return !!pattern.test(web);
  }

export const checkFormat = ( name, street, username, company ) => {
    if(typeof name !== 'string' && typeof street !== 'string' && typeof username !== 'string' && typeof company !== 'string'){
        return error_data
    } else {
        return true
    }
}

export const phoneValidaton = (phone) => {
    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?a-zA-Z]+/;
    let numeberOfDigits = phone === undefined ? null : phone.length;

    if(specialCharacters.test(phone) || numeberOfDigits < 9){
        return phone_error
    }else {
        return false
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



