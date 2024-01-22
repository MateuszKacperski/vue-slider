console.log('Vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    name: 'Vue Slider',
    data(){
        return {
            pictures,
            currentIndex: 0,

        }
    }

})
app.mount('#root')