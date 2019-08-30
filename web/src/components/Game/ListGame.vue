<template>
  <div>
<!-- set heading style -->
      <h1 style="color:green"><u>product List</u></h1>
        <div class="row">
          <div class="col-md-10"></div>
        </div>
        <br>
<!-- set table style -->
        <table class="table table-hover table-bordered table-striped table-condensed fixed">
            <thead>
            <tr class="padset"><font size="2">
<!-- set table header and column width -->
              <th scope="col" style="width: 5%"><u>E3</u></th>
              <th scope="col" style="width: 10%" ><u>Name</u></th>
              <th scope="col" style="width: 10%" ><u>Creator</u></th>
              <th scope="col" style="width: 11%"><u>Development Tool</u></th>
              <th scope="col" style="width: 21%"><u>Description</u></th>
              <th scope="col" style="width: 15%"><u>price</u></th> 
              <th scope="col" style="width: 9%"><u>DLC</u></th>
              <th scope="col" style="width: 12%"><u>CD</u></th>                                        
            </font></tr>
            </thead>
            <tbody>
<!-- set table data -->
                <tr v-for="(game,index) in games" :key="game._id" class="text-left"><font size="2">
                  <td>{{ game.E3 }}</td>
                  <td>{{ game.name }}</td>
                  <td>{{ game.creator }}</td>
                  <td>{{ game.developTool }}</td>
                  <td>{{ game.description }}</td>
                  <td>{{ game.price }}</td>
                  <td>{{ game.DLC }}</td>
                  <td>{{ game.CD }}</td>                    
                  <td><router-link :to="{name: 'editGame', params: { id: game._id }}" class="btn btn-success btnStyle"><font size="1"><p class="center">Edit</p></font> </router-link>
                  <button class="btn btn-danger btnStyle" @click.prevent="delGame(game._id)"><font size="1"><p class="center">Delete</p></font></button></td>
                </font></tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        games: []
      }
    },
    created() {
// get data from uri to create page
      let uri = 'http://localhost:3000/api/games';
      this.axios.get(uri).then(response => {
//assign response data to games        
        this.games = response.data;
      });
    },
    methods: {
      delGame(id)
      {
// get item data from uri to delete       
        let uri = `http://localhost:3000/api/delGame/${id}`;
        this.axios.delete(uri).then(response => {
          console.log(response)
          this.$message({
              type: 'success',
              message: 'deletion succeeded: '  + id
          }) 
// refresh page after deletion
          this.$router.go(0);                                                   
        }).catch((err) => {
            console.log(err);
        });
      }
    }
  }
</script>

<style>

.fixed {
  table-layout: fixed
}

.btnStyle {
  height: 28px;
  width: 50px;
  padding: 0px;
  margin: 0px
}

.center {
  display: inline-block;  
  vertical-align: middle;
  text-align: center
}

</style>