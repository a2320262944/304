<template>
  <div>
<!-- display search parameter component -->
    <app-E3></app-E3>        
    <app-name></app-name>
    <app-creator></app-creator>    
    <app-tool></app-tool> 
    <app-DLC></app-DLC>      
  </div>
</template>

<script>
   import E3Search from './E3Game.vue'
   import NameSearch from './NameGame.vue'
   import CreatorSearch from './CreatorGame.vue'   
   import ToolSearch from './ToolGame.vue' 
   import DLCSearch from './DLCGame.vue'

    export default {
      
      components:{
        'app-E3': E3Search,        
        'app-name': NameSearch,
        'app-creator': CreatorSearch,
        'app-tool': ToolSearch,   
        'app-DLC': DLCSearch               
      }
    }
</script>