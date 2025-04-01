import { createRouter, createWebHistory } from 'vue-router';
import EmployeeManagment from '@/presentation/views/EmployeeManagment.vue';  
import CompetenceManagment from '@/presentation/views/CompetenceManagment.vue'; 
import SectorManagment from '@/presentation/views/SectorManagment.vue'; 
import ProjectManagment from '@/presentation/views/ProjectManagment.vue';
import History from '@/components/other_components/History.vue';
import Assignment from '@/presentation/views/TeamManagment.vue';

const routes = [
  {
    path: '/EmployeeManagment',
    name: 'EmployeeManagment',
    component: EmployeeManagment,
  },
  {
    path: '/CompetenceManagment',
    name: 'CompetenceManagement',
    component: CompetenceManagment,
  },
  {
    path: '/SectorManagment',
    name: 'SectorManagement',
    component: SectorManagment,
  },
  {
    path: '/ProjectManagment',
    name: 'ProjectManagement',
    component: ProjectManagment,
  },
  {
    path: '/History',
    name: 'History',
    component: History,
  },
  {
    path: '/Assignment',
    name: 'Assignment',
    component: Assignment,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, 
});

export default router;
