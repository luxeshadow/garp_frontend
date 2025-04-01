<template>
    <div>
      <h2>Liste des Employés</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="employee in store.employees" :key="employee.id">
            <td>{{ employee.fullName }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.phone }}</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </template>
  
  <!-- <script setup>
  import { onMounted } from 'vue';
  import { useEmployeeStore } from '@/store/employeeStore';
  
  const store = useEmployeeStore();
  
  onMounted(() => {
    store.fetchEmployees();
  });
  </script> -->
  <style scoped>
  /* Container for the employee list */
  div {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    margin: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Header of the employee list */
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
  
  