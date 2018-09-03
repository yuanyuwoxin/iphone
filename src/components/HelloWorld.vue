<template>
  <div>
  	<IndexHeader></IndexHeader>
  	<Swipper></Swipper>
  	<Icon></Icon>
  	<Recommend></Recommend>
  	<Liandong></Liandong>
  	<div>text</div>
  	<Liandong></Liandong>
  	
  </div>
</template>

<script>
import IndexHeader from "./page/index"
import Swipper from "./page/swipper"
import Icon from "./page/icon"
import Recommend from "./page/recommend"
import Liandong from "./page/liandong"
// import CityList from "./page/city"
export default {
  name: 'index',
  data () {
    return {
      
    }
  },
  components:{
  	IndexHeader,
  	Swipper,
  	Icon,
  	Recommend,
  	Liandong
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
