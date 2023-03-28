
//sintassi di vuejs per farlo partire

const {createApp} = Vue;


createApp({
    data(){
        return{
            message: "Hello Vue!",
            text: "ciao mi chiamo silvio",
            username: ""
            
        }
    }
}).mount("#app")