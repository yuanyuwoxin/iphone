<template>
	<div>
		<el-select v-model="pro" placeholder="请选择">
		    <el-option
		      v-for="(item,key,index) in area"
		      :value="key"
		      :key='index'>
		    </el-option>
		  </el-select>
		  <el-select v-model="city" placeholder="请选择">
		    <el-option
		   	v-for="(item,key,index) in city1"
		    :value='item'
		    :key='index'>
		    </el-option>
		  </el-select>
		  <el-select v-model="qu" placeholder="请选择">
		    <el-option
		    v-for="(item,index,key) in qu1"
		    :value='item'
		    :key='index'
		    @click.native='cl(index)'>
		    </el-option>
		  </el-select>

		  <el-select v-model="jiedao" placeholder="请选择">
		    <el-option
		    v-for="(item,key,index) in jiedao1"
		    :value='item'
		    :key='index'
		    >
		    </el-option>
		  </el-select>
	</div>
</template>

<script>
import area from '../js/area.js'
	export default{
		data(){
			return {
				pro:"",
				city:"",
				city1:null,
				qu1:null,
				qu:"",
				area:area,
				jiedao:"",
				jiedao1:null,
				num:0

			}
		},
		methods:{
			arr(){
				// this.pro=Object.keys(this.area)
				console.log(this.pro)
				// 
			},
			cl(index){
				this.num=index
			}
		},
		created(){
			this.arr();
			console.log(this.$route.path)
		},
		watch:{
			pro:function(val){
				this.pro=val
				this.city=Object.keys(this.area[val][0])[0]
				this.city1=(Object.keys(this.area[val][0]))

				this.qu1=this.area[val][0][this.city]
				this.qu=Object.keys(this.area[val][0][this.city][0])[0]
				// this.$emit("input",{
				// 	pro:this.pro,
				// 	city:this.city,
				// 	qu:this.qu
				// })
				// this.update();
			},
			city:function(val){
				this.city=val

				this.qu=Object.keys(this.area[this.pro][0][val][0])[0]
				this.qu1=this.area[this.pro][0][val]
				var str=''
				this.qu1.forEach((item,index)=>{
					str+=Object.keys(item).join()+","
				})
				var aaaa=str.split(",")
				aaaa.pop()
				this.qu1=aaaa
				this.jiedao=aaaa[0]
				this.jiedao1=aaaa
				// this.$emit("input",{
				// 	pro:this.pro,
				// 	city:this.city,
				// 	qu:this.qu
				// })
				// this.update();
			},
			qu(val){
				this.qu=val
				console.log(this.qu1,'sdad')
				var arr=this.area[this.pro][0][this.city][this.num][val].split('、')
				this.jiedao=arr[0]
				this.jiedao1=arr
				
				
				
				// console.log(this.area[this.pro][0][this.city][0][val].split('、'))	
			}
		}
	}
</script>
<style scoped>
	
</style> 