
export function validateEmployee(formData) {
    const errors = {}
  
    if (!formData.full_name) {
      errors.full_name = 'Le nom complet est requis.'
    } else if (formData.full_name.length < 2) {
      errors.full_name = 'Le nom complet doit contenir au moins 2 caractères.'
    }
  
 
    const phoneRegex = /^[0-9]{10}$/
    if (!formData.phone) {
      errors.phone = 'Le numéro de téléphone est requis.'
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Le numéro de téléphone doit être composé de 10 chiffres.'
    }
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!formData.email) {
      errors.email = 'L\'email est requis.'
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'L\'email doit être valide.'
    }
  
    return errors
  }
  