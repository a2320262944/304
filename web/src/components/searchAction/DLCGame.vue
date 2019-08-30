<template>
  <div>  
<!-- put label, input, button in one line -->
    <form @submit.prevent="searchDLC" class="form-inline">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group" style="margin-top:20px"> 
<!-- set label and input style -->                                      
            <label style="margin: 5px; padding-top: 12px; color:pink"><h6>Search by DLC:  </h6></label>
            <input style="width: 385px; margin-left: 5px; margin-right: 5px; padding-left:5px; padding-right:5px; padding-top:10px; color:pink" type="text" class="form-control" v-model="game.DLC" placeholder="Enter DLC">           
          </div>
        </div>
      </div>
      <div class="form-group" style="margin-top:20px">
<!-- set button style and redirect to search result page -->
        <router-link :to="{name: 'resultDLC', params: { DLC: game.DLC }}" class="btn btn-secondary" style="width:136px" @click.prevent="DLCSearch(game.DLC)"> DLC Search</router-link>
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
        DLCSearch(DLC) {        
          let uri = `http://localhost:3000/api/searchDLC/${DLC}`;         
          this.axios.get(uri).then((response) => {                    
            this.game = response.data;                   
          });
        }
      }
    }
</script>