<template>
  <div class="form-wrapper">
    <h1 style="color:green"><b>Make the Game</b></h1>
    <br>
    <form @submit.prevent="addGame">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>E3:</label>
            <input type="text" class="form-control" v-model="game.E3" placeholder="Enter E3">
          </div>
        </div>
        </div>
       <div class="row">       
        <div class="col-md-12">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="game.name" placeholder="Enter name">
          </div>
        </div>
        </div>
       <div class="row">  
        <div class="col-md-12">
          <div class="form-group">
            <label>Creator:</label>
            <input type="text" class="form-control" v-model="game.creator" placeholder="Enter creator">
          </div>
        </div>
        </div>
       <div class="row">  
        <div class="col-md-12">
          <div class="form-group">
            <label>Development Tool:</label>
            <input type="text" class="form-control" v-model="game.developTool" placeholder="Enter development tool">
          </div>
        </div>
        </div>
       <div class="row">  
        <div class="col-md-12">
          <div class="form-group">
            <label>Description:</label>
            <input type="text" class="form-control" v-model="game.description" placeholder="Enter description">
          </div>
        </div>
        </div>
       <div class="row">  
        <div class="col-md-12">
          <div class="form-group">
            <label>price:</label>
            <input type="text" class="form-control" v-model="game.price" placeholder="Enter price">
          </div>
        </div>
        </div>        
       <div class="row">  
        <div class="col-md-12">
          <div class="form-group">
            <label>DLC:</label>
            <input type="text" class="form-control" v-model="game.DLC" placeholder="Enter DLC">
          </div>
        </div>
        </div>
       <div class="row">          
        <div class="col-md-12">
          <div class="form-group">
            <label>CD:</label>
            <input type="text" class="form-control" v-model="game.CD" placeholder="Enter CD">
          </div>
        </div>
        </div>
        <br />
        <div class="form-group">
          <button class="btn btn-primary">Add Game</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          game:{}
        }
    },
    methods: {   
      addGame(){
// post data to uri to add record        
        let uri = 'http://localhost:3000/api/addGame';
        this.axios.post(uri, this.game).then(() => {
// redirect to game list page after adding record         
          this.$router.push({name: 'games'});
        });
      }
    }
  }
</script>