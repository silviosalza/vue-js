
//sintassi di vuejs per farlo partire
const {createApp} = Vue;


createApp({
    data(){
        return{
           name: "",
           lastname: "" 
        }
    },
    methods: {
       greeting(){
        const text = `Ciao ${this.name} ${this.lastname}`
        alert(text)
       },

       handleKeyup(){
        console.log("invio");
       }

    }
}).mount("#app")