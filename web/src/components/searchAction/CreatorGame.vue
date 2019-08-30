<template>
  <div>  
<!-- put label, input, button in one line -->  
    <form @submit.prevent="searchCreator" class="form-inline">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group" style="margin-top:20px">    
<!-- set label and input style -->                                     
            <label style="margin: 5px; padding-top: 12px; color:red"><h6>Search by Creator:  </h6></label>
            <input style="width: 380px; margin-left: 5px; margin-right: 5px; padding-left:5px; padding-right:5px; padding-top:10px; color:green" type="text" class="form-control" v-model="game.creator" placeholder="Enter creator">           
          </div>
        </div>
      </div>
      <div class="form-group" style="margin-top:20px">
<!-- set button style and redirect to search result page -->      
        <router-link :to="{name: 'resultCreator', params: { creator: game.creator }}" class="btn btn-warning" @click.prevent="creatorSearch(game.creator)"> Creator Search</router-link>
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
        creatorSearch(creator) {        
          let uri = `http://localhost:3000/api/searchCreator/${creator}`;         
          this.axios.get(uri).then((response) => {                     
            this.game = response.data;                   
          });
        }
      }
    }
</script>