<template>
  <div>
  	<IndexHeader></IndexHeader>
  	<Swipper></Swipper>
  	<div>text</div>
  </div>
</template>

<script>
import IndexHeader from "./page/index"
import Swipper from "./page/swipper"

export default {
  name: 'index',
  data () {
    return {
      
    }
  },
  components:{
  	IndexHeader,
  	Swipper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
