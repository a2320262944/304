<template>
  <div>
<!-- set heading style -->
      <h4 style="color:orange"><u><b>SEARCH RESULT - BY AWARD</b></u></h4>
        <div class="row">
          <div class="col-md-10"></div>
        </div>
        <br>
<!-- set table style -->
        <table class="table table-hover table-bordered table-striped table-condensed fixed">
            <thead>
            <tr class="padset"><font size="2">
<!-- set table header and column width -->
              <th scope="col" style="width: 5%"><u>Platform</u></th>
              <th scope="col" style="width: 10%" ><u>Name</u></th>
              <th scope="col" style="width: 10%" ><u>Creator</u></th>
              <th scope="col" style="width: 11%"><u>Development Tool</u></th>
              <th scope="col" style="width: 25%"><u>Description</u></th>
              <th scope="col" style="width: 15%"><u>Website</u></th> 
              <th scope="col" style="width: 10%"><u>Language</u></th>
              <th scope="col" style="width: 14%"><u>Remark</u></th>                                   
            </font></tr>
            </thead>
            <tbody>
<!-- set table data -->
                <tr v-for="(game,index) in games" :key="game._id" class="text-left"><font size="2">
                  <td>{{ game.platform }}</td>
                  <td>{{ game.name }}</td>
                  <td>{{ game.creator }}</td>
                  <td>{{ game.developTool }}</td>
                  <td>{{ game.description }}</td>
                  <td>{{ game.website }}</td>
                  <td>{{ game.language }}</td>
                  <td>{{ game.remark }}</td>                    
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
      let uri = `http://localhost:3000/api/searchLanguage/${this.$route.params.language}`;
      this.axios.get(uri).then(response => {
        this.games = response.data;
      });
    },
    methods: {
    }
  }
</script>