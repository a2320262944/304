<template>
  <div>
<!-- set heading style -->
      <h4 style="color:red"><u><b>SEARCH RESULT - BY EMAIL</b></u></h4>
        <div class="row">
          <div class="col-md-10"></div>
        </div>
        <br>
<!-- set table style -->
        <table class="table table-hover table-bordered table-striped table-condensed">
            <thead>
            <tr>
<!-- set table header and column width -->                
              <th scope="col" style="width: 30%"><u>Email</u></th>
              <th scope="col" style="width: 70%"><u>Password (Encrypted)</u></th>                              
            </tr>
            </thead>
            <tbody>
<!-- set table data -->                
                <tr v-for="(user,index) in users" :key="user._id" class="text-left">
                  <td>{{ user.email }}</td>
                  <td>{{ user.password}}</td>                  
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: []
      }
    },
    created() {          
      let uri = `http://localhost:3000/api/searchEmail/${this.$route.params.email}`;
      this.axios.get(uri).then(response => {
        this.users = response.data;
      });
    },
    methods: {
    }
  }
</script>