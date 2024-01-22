console.log('Vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    name: 'Vue Slider',
    data: () => ({
       
            pictures,
            currentIndex: 0,
            interval:''
    }),
    methods: {
        goNext(){
            if(this.currentIndex === pictures.length-1){
                this.currentIndex = 0;
            }else this.currentIndex++;

            
        },
        goPrev(){
            if(this.currentIndex === 0){
                this.currentIndex = pictures.length-1;
            }else this.currentIndex--;
        },
        stopInterval(){
            clearInterval(this.interval)
        },
        startInterval(){
            setInterval(this.goNext, 3000);
        }
    },
    mounted(){
        this.interval = setInterval(this.goNext, 3000);
    }
})


app.mount('#root')