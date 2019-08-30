<template>
  <div>  
<!-- put label, input, button in one line -->  
    <form @submit.prevent="searchDevelopTool" class="form-inline">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group" style="margin-top:20px">  
<!-- set label and input style -->                                              
            <label style="margin: 5px; padding-top: 12px; color:yellow"><h6>Search by Development Tool:  </h6></label>
            <input style="width: 302px; margin-left: 5px; margin-right: 5px; padding-left:5px; padding-right:5px; padding-top:10px" type="text" class="form-control text-info" v-model="game.developTool" placeholder="Enter development tool">           
          </div>
        </div>
      </div>
      <div class="form-group" style="margin-top:20px">
<!-- set button style and redirect to search result page -->      
        <router-link :to="{name: 'resultTool', params: { developTool: game.developTool }}" class="btn btn-info" style="width:136px" @click.prevent="ToolSearch(game.developTool)">Tool Search</router-link>
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
        ToolSearch(developTool) {         
          let uri = `http://localhost:3000/api/searchTool/${developTool}`;         
          this.axios.get(uri).then((response) => {                      
            this.game = response.data;                    
          });
        }
      }
    }
</script>