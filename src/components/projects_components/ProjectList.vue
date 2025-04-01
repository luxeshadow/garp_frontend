<template>
    <div>
      <h2>Liste des Projets</h2>
      <table>
        <thead>
          <tr>
            <th>Nom du Projet</th>
            <th>Description</th>
          </tr>
        </thead>
        <!-- <tbody>
          <tr v-for="projet in projets" :key="projet.id">
            <td>{{ projet.name }}</td>
            <td>{{ projet.description }}</td>
          </tr>
        </tbody> -->
      </table>
    </div>
  </template>
  
  <style scoped>
  /* Container for the project list */
  div {
    padding: 20px;
    margin: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Header of the project list */
  h2 {
    font-size: 1.8rem;
    color: #002147;
    margin-bottom: 20px;
    text-align: center;
  }
  
  /* Table styling */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Table header */
  thead {
    background-color: #002147;
    color: white;
  }
  
  th {
    padding: 12px 15px;
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
  }
  
  /* Table body */
  tbody {
    background-color: #f9f9f9;
  }
  
  td {
    padding: 12px 15px;
    text-align: left;
    font-size: 1rem;
    color: #333;
  }
  
  tr:nth-child(even) {
    background-color: #f1f1f1;
  }
  
  tr:hover {
    background-color: #e2e2e2;
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    th, td {
      font-size: 0.9rem;
      padding: 10px;
    }
  
    table {
      width: 100%;
      margin-top: 10px;
    }
  }
  </style>
  