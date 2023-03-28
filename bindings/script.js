
//sintassi di vuejs per farlo partire
const {createApp} = Vue;


createApp({
    data(){
        return{
           heading: "Hello Vue Binding!",
           headingClass: "red"
        }
    },
    methods: {
       changeColor(){
            if(this.headingClass === "blue"){
                this.headingClass = "green"
            } else {
                this.headingClass = "blue"
            }


       }

    }
}).mount("#app")