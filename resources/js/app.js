import './bootstrap';
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/vue3';
import MainLayout from './Layout/MainLayout.vue';
import {ZiggyVue} from 'ziggy-js';
import '../css/app.css';

createInertiaApp({
    layout: () => MainLayout,

    withApp: (app) => {
    app.use(ZiggyVue);
  },
});