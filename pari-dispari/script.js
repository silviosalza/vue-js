
//sintassi di vuejs per farlo partire
const {createApp} = Vue;


createApp({
    data(){
        return{
           userNumber:"",
           result: ""
        }
    },
    methods: {
      oddEven(){

        const number = parseInt(this.userNumber)
        if(number % 2 === 0){
            this.result = "pari"

        } else {
            this.result = "dispari"
        }
      }

    }
}).mount("#app")