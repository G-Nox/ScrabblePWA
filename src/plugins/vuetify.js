import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#546E7A',
                secondary:'#2196f3',
                accent: '#ffc107',
                error: '#ff5722',
                warning: '#ff9800',
                info: '#607d8b',
                success:'#4caf50',
                background: '#E0F2F1'
            }
        }
    }
});
