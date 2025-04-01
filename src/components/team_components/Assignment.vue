<template>
      <div class="container">
        <h1 class="page-title">Assignation de Projet</h1>
        
        <!-- Formulaire de création d'équipe -->
        <div class="form-section">
            <h2>Création d'Équipe</h2>
            <form>
                <label for="teamName">Nom de l'équipe:</label>
                <input type="text" id="teamName" placeholder="Entrez le nom de l'équipe">

                <label for="projectAssignment">Assignation du Projet:</label>
                <select id="projectAssignment">
                    <option value="">Sélectionner un projet</option>
                    <option value="projet1">Projet 1</option>
                    <option value="projet2">Projet 2</option>
                    <option value="projet3">Projet 3</option>
                </select>
            </form>
        </div>

        <!-- Liste des employés avec case à cocher -->
        <div class="employee-section">
            <h2>Sélection des Employés</h2>
            <table>
                <thead>
                    <tr>
                        <th>Sélectionner</th>
                        <th>Nom de l'Employé</th>
                        <th>Poste</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" id="emp1"></td>
                        <td>Jean Dupont</td>
                        <td>Développeur</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" id="emp2"></td>
                        <td>Marie Martin</td>
                        <td>Designer</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" id="emp3"></td>
                        <td>Paul Durand</td>
                        <td>Chef de projet</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Assignation des tâches -->
        <div class="task-section">
            <h2>Assignation des Tâches</h2>
            <table>
                <thead>
                    <tr>
                        <th>Employé</th>
                        <th>Tâche</th>
                        <th>Tag</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" value="Jean Dupont" readonly></td>
                        <td>
                            <select>
                                <option value="dev">Développement</option>
                                <option value="design">Design</option>
                                <option value="management">Gestion</option>
                            </select>
                        </td>
                        <td><input type="text" placeholder="Entrez un tag"></td>
                    </tr>
                    <tr>
                        <td><input type="text" value="Marie Martin" readonly></td>
                        <td>
                            <select>
                                <option value="dev">Développement</option>
                                <option value="design">Design</option>
                                <option value="management">Gestion</option>
                            </select>
                        </td>
                        <td><input type="text" placeholder="Entrez un tag"></td>
                    </tr>
                    <tr>
                        <td><input type="text" value="Paul Durand" readonly></td>
                        <td>
                            <select>
                                <option value="dev">Développement</option>
                                <option value="design">Design</option>
                                <option value="management">Gestion</option>
                            </select>
                        </td>
                        <td><input type="text" placeholder="Entrez un tag"></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="submit-section">
            <button type="submit" class="submit-btn">Soumettre l'assignation</button>
        </div>
    </div>
</template>
<style scoped>
.container {
    width: 80%;
    margin: 20px auto;
}

.page-title {
    text-align: center;
    font-size: 28px;
    color: #002147;
    margin-bottom: 20px;
}

/* Form Section */
.form-section {
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-section h2 {
    color: #002147;
    margin-bottom: 15px;
}

.form-section form {
    display: flex;
    flex-direction: column;
}

.form-section input, .form-section select {
    margin: 10px 0;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
}

.form-section input:focus, .form-section select:focus {
    border-color: #002147;
}

/* Employee Section */
.employee-section {
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.employee-section h2 {
    color: #002147;
    margin-bottom: 15px;
}

.employee-section table {
    width: 100%;
    border-collapse: collapse;
}

.employee-section th, .employee-section td {
    padding: 12px;
    border: 1px solid #e0e0e0;
    text-align: left;
}

.employee-section th {
    background-color: #002147;
    color: white;
}

.employee-section tr:nth-child(even) {
    background-color: #f9f9f9;
}

.employee-section td input[type="checkbox"] {
    width: 20px;
    height: 20px;
}

/* Task Section */
.task-section {
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.task-section h2 {
    color: #002147;
    margin-bottom: 15px;
}

.task-section table {
    width: 100%;
    border-collapse: collapse;
}

.task-section th, .task-section td {
    padding: 12px;
    border: 1px solid #e0e0e0;
    text-align: left;
}

.task-section th {
    background-color: #002147;
    color: white;
}

.task-section tr:nth-child(even) {
    background-color: #f9f9f9;
}

.task-section select, .task-section input[type="text"] {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #e0e0}
</style>