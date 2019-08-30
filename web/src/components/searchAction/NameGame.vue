<template>
  <div>  
<!-- put label, input, button in one line -->  
    <form @submit.prevent="searchName" class="form-inline">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group" style="margin-top:20px">  
<!-- set label and input style -->                                         
            <label style="margin: 5px; padding-top: 12px; color:pink"><h6>Search by Name:  </h6></label>
            <input style="width: 390px; margin-left: 5px; margin-right: 5px; padding-left:5px; padding-right:5px; padding-top:10px; color:pink" type="text" class="form-control" v-model="game.name" placeholder="Enter name">           
          </div>
        </div>
      </div>
      <div class="form-group" style="margin-top:20px">
<!-- set button style and redirect to search result page -->      
        <router-link :to="{name: 'resultName', params: { name: game.name }}" class="btn btn-success" style="width:136px" @click.prevent="nameSearch(game.name)"> Name Search</router-link>
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
        nameSearch(name) {            
          let uri = `http://localhost:3000/api/searchName/${name}`;         
          this.axios.get(uri).then((response) => {                    
            this.game = response.data;                     
          });
        }
      }
    }
</script>