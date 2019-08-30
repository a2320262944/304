<template>
  <div>  
<!-- put label, input, button in one line -->
    <form @submit.prevent="searchLanguage" class="form-inline">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group" style="margin-top:20px"> 
<!-- set label and input style -->                                      
            <label style="margin: 5px; padding-top: 12px; color:grey"><h6>Search by Language:  </h6></label>
            <input style="width: 385px; margin-left: 5px; margin-right: 5px; padding-left:5px; padding-right:5px; padding-top:10px; color:grey" type="text" class="form-control" v-model="game.language" placeholder="Enter language">           
          </div>
        </div>
      </div>
      <div class="form-group" style="margin-top:20px">
<!-- set button style and redirect to search result page -->
        <router-link :to="{name: 'resultLanguage', params: { language: game.language }}" class="btn btn-secondary" style="width:136px" @click.prevent="languageSearch(game.language)"> Language Search</router-link>
      </div>
    </form>
  </div>
</template>

<script>
    import axios from "axios"
    export default {
      data() {
        return {
          game: []
        }
      },  
      created() {     
      },      
      methods: {
        languageSearch(language) {        
          let uri = `http://localhost:3000/api/searchLanguage/${language}`;         
          this.axios.get(uri).then((response) => {                    
            this.game = response.data;                   
          });
        }
      }
    }
</script>