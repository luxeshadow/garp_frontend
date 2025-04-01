<template>
  <div class="page-flex">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-start">
        <div class="sidebar-head">
          <a href="#" class="logo-wrapper" title="Home">
            <span class="img" aria-hidden="true">
              <img width="70px" src="/img/logo.png" alt="Company Logo">
            </span>
            <div class="logo-text">
              <span class="logo-title">Kofcorporation</span>
              <span class="logo-subtitle">Dashboard</span>
            </div>
          </a>
        </div>

        <div class="sidebar-body">
          <ul class="sidebar-body-menu">


            <li>
              <a @click="toggleSubMenu('management')">
                <img src="/img/work.png" alt="Management" class="icons">
                Management
                <span class="category__btn transparent-btn">
                  <img src="/img/arrow.png" alt="Dropdown" class="icons-arrow-down">
                </span>
              </a>
              <ul v-if="subMenus.management" class="cat-sub-menu">
                <li>

                  <router-link to="/EmployeeManagment"><img src="/img/employee.png" alt="Management" class="icon"> Add
                    Employee</router-link>

                </li>
                <li>


                  <RouterLink to="/ProjectManagment"> <img src="/img/projet.png" alt="Management" class="icon"> Add
                    Project</RouterLink>
                </li>
                <li>


                  <router-link to="/CompetenceManagment"> <img src="/img/training.png" alt="Management" class="icon">
                    Add Competence</router-link>
                </li>
                <li>

                  <router-link to="/AddTypeProjet"> <img src="/img/files.png" alt="Management"
                      class="icon">Type-Project</router-link>

                </li>
                <li>
                  <router-link to="/SectorManagment"><img src="/img/employee.png" alt="Management" class="icon"> Add
                    Sector</router-link>


                </li>

              </ul>
            </li>

            <li>
              <a @click="toggleSubMenu('workspace')">
                <img src="/img/team.png" alt="Management" class="icons">
                Workspace
                <span class="category__btn transparent-btn">
                  <img src="/img/arrow.png" alt="Dropdown" class="icon-arrow-down">
                </span>
              </a>

              <ul v-if="subMenus.workspace" class="cat-sub-menu">
                <li>
                  <router-link to="/Assignment"> <img src="/img/history.png" alt="CreatTeam" class="icon">
                    create-team</router-link>
                </li>
                <li>

                  <router-link to="/Monitoring"> <img src="/img/kpis.png" alt="Monitoring"
                      class="icon">Monitoring</router-link>
                </li>

              </ul>
            </li>
            <a class="other-component-sidbar">
              <router-link to="/History"> <img src="/img/history.png" alt="WorkSpace" class="icon">
                History</router-link>

            </a>
            <a class="other-component-sidbar">
              <router-link to="/Settting"> <img src="/img/setting.png" alt="Setting" class="icons">
                Setting</router-link>

            </a>

          </ul>


        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="main-wrapper">
      <nav class="main-nav--bg">
        <div class="container main-nav">
          <div class="main-nav-start">
            <span class="img" aria-hidden="true">
              <img width="42px" src="/img/logo.png" alt="Company Logo">
            </span>
            <h3 class="main-title">Kofcorporation</h3>
          </div>
          <div class="main-nav-end">
            <button class="theme-switcher" @click="toggleTheme">
              <img v-if="isDarkMode" src="/img/work.png" alt="Dark Mode" class="theme-icon">
              <img v-else src="/img/work.png" alt="Light Mode" class="theme-icon">
            </button>
            <div class="nav-user-wrapper">
              <button class="dropdown-btn" @click="toggleUserMenu">
                <img src="/img/profile.png" alt="User Menu" class="user-icon">
              </button>
              <ul v-if="userMenuOpen" class="users-item-dropdown">
                <li><router-link to="/profile">Profile</router-link></li>
                <li><a @click="logout">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <router-view />

    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      subMenus: {
        management: false,
        workspace: false
      },
      userMenuOpen: false,
      isDarkMode: false,
    };
  },
  methods: {
    toggleSubMenu(menu) {
      this.subMenus[menu] = !this.subMenus[menu];
    },
    toggleUserMenu() {
      this.userMenuOpen = !this.userMenuOpen;
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
    },
    logout() {
      // Implement logout logic
      console.log('Logging out...');
    }
  }
};
</script>

<style scoped>
.page-flex {
  display: flex;
  height: 100vh;
}

ul {
  cursor: pointer;
}

.sidebar {
  width: 250px;
  background: #f8f9fa;
  height: 100vh;
  /* Le sidebar occupe toute la hauteur de l'écran */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  /* Fixe le sidebar pour qu'il reste en place même quand la page défile */
  top: 0;
  left: 0;
  overflow-y: auto;
  /* Si le contenu du sidebar dépasse, il devient scrollable */
}

.main-wrapper {
  top: 0;
  left: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  height: 100vh;
}


.sidebar-head {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #002147;
}

.logo-text {
  margin-left: 10px;
}

.logo-title {
  font-size: 18px;
  font-weight: bold;
  display: block;
}

.logo-subtitle {
  font-size: 12px;
  color: #666;
}

.sidebar-body-menu {
  list-style-type: none;
  padding: 0;
}

.sidebar-body-menu li {
  margin: 10px 0;
}

.sidebar-body-menu a {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
  color: #002147;
  transition: background-color 0.3s;
}

.sidebar-body-menu a:hover {
  background-color: #e0e0e0;
}

.sidebar-body-menu .icon {
  width: 20px;
  margin-right: 10px;
  margin-left: 5px;
  margin-top: -7px;
}

.icons {
  width: 20px;
  margin-right: 10px;
  margin-left: 5px;


}

.other-component-sidbar {
  margin-left: -19px;
}

.icon-arrow-down {
  width: 20px;
  margin-top: 7px;
  margin-left: 18px;
}

.icons-arrow-down {
  width: 20px;
  margin-top: 7px;
  margin-left: 7px;
}

.cat-sub-menu {
  list-style-type: none;
  padding-left: 40px;

}

.cat-sub-menu li {
  margin: 5px 0;
}

.main-nav--bg {
  background-color: #002147;
  color: white;
  padding: 10px 20px;
  margin-top: -10px;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-nav-start {
  display: flex;
  align-items: center;
}

.main-nav-start img {
  margin-right: 10px;
}

.main-nav-end {
  display: flex;
  align-items: center;
}

.theme-switcher,
.dropdown-btn {
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 10px;
}

.theme-icon,
.user-icon {
  width: 24px;
  height: 24px;
}

.users-item-dropdown {
  position: absolute;
  right: 20px;
  top: 60px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  list-style-type: none;
}

.users-item-dropdown li {
  margin: 5px 0;
}

.users-item-dropdown a {
  text-decoration: none;
  color: #002147;
}
</style>