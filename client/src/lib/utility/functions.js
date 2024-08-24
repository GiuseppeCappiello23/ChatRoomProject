function isValidEmail(email) {
    // Definisce l'espressione regolare per validare l'indirizzo email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Restituisce true se l'email è valida, altrimenti false
    return emailRegex.test(email);
}


export {isValidEmail} 