<template>
  <div>
<!-- put label, input, button in one line -->
    <form @submit.prevent="searchE3" class="form-inline" style="margin: 5; padding: 5;">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
<!-- set label and input style --> 
            <label style="margin: 5px; padding-top: 12px;"><h6>Search by E3:  </h6></label>
            <input style="width: 398px; margin-left: 5px; margin-right: 5px; padding-left:5px; padding-right:5px; padding-top:10px;" type="text" class="form-control" v-model="game.E3" placeholder="Enter E3">          
          </div>
        </div>
      </div>
      <div class="form-group">
<!-- set button style and redirect to search result page -->      
        <router-link :to="{name: 'resultE3', params: { E3: game.E3 }}" class="btn btn-dark btn-group-small" style="width:136px" @click.prevent="E3Search(game.E3)">E3 Search</router-link>
      </div>
    </form>
    <p></p>
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
        E3Search(E3) {     
          let uri = `http://localhost:3000/api/searchE3/${E3}`;         
          this.axios.get(uri).then((response) => {                   
            this.game = response.data;                   
          });
        }
      }
    }
</script>