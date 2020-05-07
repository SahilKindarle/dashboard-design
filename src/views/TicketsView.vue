<template>
  <div>
      {{$route.params.waters}}
    <h1>Sahil</h1>
    
  </div>
</template>

<script>
export default {
//   props:{
//       waters:{
//           type: Array,
//           required: true
//       }
//   },
  mounted(){
      console.log(this.$route.params.waters.name)
  }
}
</script>