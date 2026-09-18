import { defineConfig } from 'vite';
import inertia from '@inertiajs/vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        inertia(),
        tailwindcss(),
    ],
    resolve:{
        alias:{
            ziggy:path.resolve('vendor/tightenco/ziggy/dist/vue.es.js')
        }
    }
});