<template>
    <div class="recherche">
    <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Recherche...">
    </div>
</div>
<div  class="container">
<div class="header">
    <div class="logo">
        <div class="logo-circle">A-S</div>
        <h2>Attote-sos</h2>
    </div>
    <div class="project-info">
        <div>Date de Début: 2024-02-27 15:00:00</div>
        <div>Date Fin: 2024-06-29</div>
        <div class="status-terminated">Terminé...</div>
    </div>
</div>

<div class="table-container">
    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Téléphone</th>
                <th>Secteur d'Activité</th>
                <th>Compétences</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Guna Marana</td>
                <td>+228 90746583</td>
                <td>Dev Web</td>
                <td>ReactJs</td>
            </tr>
            <tr>
                <td>Salam Ambire</td>
                <td>+228 98746534</td>
                <td>Dev Web</td>
                <td>ReactJs</td>
            </tr>
        </tbody>
    </table>
</div>
</div>
</template>
<style scoped>


.container {
    margin: 12px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid #e0e0e0;
}
.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}
.logo-circle {
    width: 40px;
    height: 40px;
    background-color: #e0e0ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: blue;
}
.project-info {
    text-align: right;
    font-size: 0.8em;
    color: #666;
}
.recherche {
    padding: 15px 20px;
   
    margin: 12px;
}
.search-bar {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    padding: 5px 10px;
    border: 1px solid #ced4da;
}
.search-bar input {
    border: none;
    background: transparent;
    width: 100%;
    padding: 5px;
    outline: none;
}
.search-bar i {
    color: #aaa;
}
.table-container {
    padding: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
}
th {
    background-color: #f1f3f5;
    color: #495057;
    font-weight: 600;
    padding: 12px;
    text-align: left;
    border-bottom: 2px solid #dee2e6;
}
td {
    padding: 12px;
    border-bottom: 1px solid #e9ecef;
}
tr:hover {
    background-color: #f8f9fa;
}
.status-terminated {
    color: green;
    font-weight: bold;
}
</style>

