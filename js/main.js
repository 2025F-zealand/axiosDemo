const baseUri = "http://jsonplaceholder.typicode.com/posts"

const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            postslist:[],
        }
    },
    methods: {
        getAllPosts(){
            axios.get(baseUri)
            .then(response => {
             console.log("in function getAllPosts");
             console.log("status code: "+ response.status );

             //add the returning data from the webservice to the variable "posts" that is an array
              this.postslist = response.data;
              
             console.log("length of the posts array " + this.postslist.length)

            })
            .catch(error = (ex) => {
               this.posts = []
               this.error = ex.message
              console.log("Error:" + this.error);
            })      






        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
