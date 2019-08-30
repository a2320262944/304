<template>
  <div>
<!-- put label, input, button in one line -->
    <form @submit.prevent="searchPlatform" class="form-inline" style="margin: 5; padding: 5;">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
<!-- set label and input style --> 
            <label style="margin: 5px; padding-top: 12px;"><h6>Search by Platform:  </h6></label>
            <input style="width: 398px; margin-left: 5px; margin-right: 5px; padding-left:5px; padding-right:5px; padding-top:10px;" type="text" class="form-control" v-model="game.platform" placeholder="Enter platform">          
          </div>
        </div>
      </div>
      <div class="form-group">
<!-- set button style and redirect to search result page -->      
        <router-link :to="{name: 'resultPlatform', params: { platform: game.platform }}" class="btn btn-dark btn-group-small" style="width:136px" @click.prevent="platformSearch(game.platform)">Platform Search</router-link>
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
        platformSearch(platform) {     
          let uri = `http://localhost:3000/api/searchPlatform/${platform}`;         
          this.axios.get(uri).then((response) => {                   
            this.game = response.data;                   
          });
        }
      }
    }
</script>