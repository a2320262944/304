<template>
  <div>
    <br>
    <br>
<!-- put label, input, button in one line -->
    <form @submit.prevent="searchEmail" class="form-inline" style="margin: 5; padding: 5;">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
<!-- set label and input style -->   
            <label style="margin: 5px; padding-top: 12px;"><h6>Search by Email:  </h6></label>
            <input style="width: 398px; margin-left: 5px; margin-right: 5px; padding-left:5px; padding-right:5px; padding-top:10px;" type="text" class="form-control" v-model="user.email" placeholder="Enter email">          
          </div>
        </div>
      </div>
      <div class="form-group">
<!-- set button style and redirect to search result page -->      
        <router-link :to="{name: 'resultEmail', params: { email: user.email }}" class="btn btn-secondary btn-group-small text-warning" style="width:136px" @click.prevent="emailSearch(user.email)">Email Search</router-link>
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
          user: []
        }
      },  
      created() {     
      },      
      methods: {
        emailSearch(email) {       
          let uri = `http://localhost:3000/api/searchEmail/${email}`;         
          this.axios.get(uri).then((response) => {                     
            this.user = response.data;                     
          });
        }
      }
    }
</script>