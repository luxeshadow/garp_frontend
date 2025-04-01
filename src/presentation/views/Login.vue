<template>
  <body>
    <div class="page-center">
      <article class="sign-up">
        <h1 class="sign-up__title">Content de te revoir!</h1>
        <p class="sign-up__subtitle">Connectez-vous à votre compte pour continuer</p>

        <form @submit.prevent="handleLogin" class="sign-up-form form col-xl-12">
          <label class="form-label-wrapper">
            <p class="form-label">Email</p>
            <input v-model="email" required name="email" class="form-input" type="email" placeholder="Entrer l'email"
              autocomplete="off">
          </label>

          <label class="form-label-wrapper">
            <p class="form-label">Mot de passe</p>
            <div class="password-wrapper">
              <input v-model="password" required class="form-input" :type="passwordType" id="password" name="password"
                placeholder="Saisissez votre mot de passe" autocomplete="off">
              <button type="button" class="toggle-password" @click="togglePasswordVisibility">
                &#128065;
                <span class="slash" :style="{ display: passwordType === 'password' ? 'block' : 'none' }"></span>
              </button>
            </div>
          </label>

          <button class="form-btn primary-default-btn transparent-btn" type="submit">
            Connexion
          </button>
        </form>
      </article>
    </div>
  </body>
</template>

<script>

</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.page-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff; /* Fond blanc */
  padding: 20px;
}

.sign-up {
  background: #f5f5f5; /* Couleur plus distincte pour le formulaire */
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
  border-color: #002147;
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

@media (max-width: 600px) {
  .sign-up {
    padding: 25px;
  }

  .sign-up__title {
    font-size: 22px;
  }

  .form-btn {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
