<template>
    <body>
        <div class="page-center">
  <article class="sign-up">
    <h1 class="sign-up__title">Bienvenue sur notre site !</h1>
    <p class="sign-up__subtitle">Créez un compte pour commencer</p>
    
    <form @submit.prevent="handleRegister" class="sign-up-form form col-xl-12">
      <!-- Prénom -->
      <label class="form-label-wrapper">
        <p class="form-label">Prénom</p>
        <input 
          v-model="firstName" 
          required 
          name="firstName" 
          class="form-input" 
          type="text" 
          placeholder="Entrez votre prénom" 
          autocomplete="off"
        >
      </label>
      
      <!-- Nom -->
      <label class="form-label-wrapper">
        <p class="form-label">Nom</p>
        <input 
          v-model="lastName" 
          required 
          name="lastName" 
          class="form-input" 
          type="text" 
          placeholder="Entrez votre nom" 
          autocomplete="off"
        >
      </label>
      
      <!-- Email -->
      <label class="form-label-wrapper">
        <p class="form-label">Email</p>
        <input 
          v-model="email" 
          required 
          name="email" 
          class="form-input" 
          type="email" 
          placeholder="Entrez votre email" 
          autocomplete="off"
        >
      </label>
      
      <!-- Mot de passe -->
      <label class="form-label-wrapper">
        <p class="form-label">Mot de passe</p>
        <div class="password-wrapper">
          <input 
            v-model="password" 
            required 
            class="form-input" 
            :type="passwordType" 
            id="password" 
            name="password" 
            placeholder="Créez votre mot de passe" 
            autocomplete="off"
          >
          <button 
            type="button" 
            class="toggle-password" 
            @click="togglePasswordVisibility"
          >
            &#128065;
            <span 
              class="slash" 
              :style="{ display: passwordType === 'password' ? 'block' : 'none' }"
            ></span>
          </button>
        </div>
      </label>
      
      <!-- Confirmation du mot de passe -->
     
       
      
      <!-- Bouton d'inscription -->
      <button 
        class="form-btn primary-default-btn transparent-btn" 
        type="submit"
      >
        S'inscrire
      </button>
    </form>
  </article>
</div>
    </body>
   
</template>
<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  
}


body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;

}


.sign-up {
  background: #ffffff;
  border-radius: 10px;
  padding: 35px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sign-up:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}


.sign-up__title {
  font-size: 26px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.sign-up__subtitle {
  font-size: 15px;
  color: #666;
  margin-bottom: 25px;
}


.sign-up-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}


.form-label-wrapper {
  text-align: left;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #444;
  margin-bottom: 6px;
}


.form-input {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: all 0.3s ease;
}

.form-input:focus {
  border-color: #007BFF;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}


.password-wrapper {
  position: relative;
}


.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #888;
  transition: color 0.3s ease;
}

.toggle-password:hover {
  color: #333;
}


.form-btn {
  padding: 12px;
  background: #002147;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-btn:hover {
  background: #02244ae9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}


.transparent-btn {
  background: transparent;
  border: 2px solid #002147;
  color: #002147;
  transition: all 0.3s ease;
}

.transparent-btn:hover {
  background: #002147;
  color: #fff;
}




</style>