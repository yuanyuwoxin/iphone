<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont">&#xe624;</span>
		</div>
		<div class="header-input">
			<input type="text" class="ipt" v-model="obj.val" placeholder="请输入景点...">
		</div>
		<router-link to='/city'>
			<div class="header-right">
				{{name}}
				<span class="iconfont">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>
<script>
import CityList from "./city"
	export default{
		data(){
			return {
				obj:{
					val:""
				},
				name:'上海'
			}	
		},
		watch:{
			obj:{   //监听对象
				handler(value){
					console.log(value.val)
				},
				deep:true
			}
		},
		computed: {
	    　　newValue() {
	    　　　　return this.obj.val
	    　　}
	    },
		methods:{
		}

	}
</script>
<style scoped lang="scss">
	@import '../css/all.styl';
	$color:red;
    .ipt::-webkit-input-placeholder{
        color:$color;
    }
	.header{
		line-height: .86rem;
		background:$bg;
		display: flex;
		color: #fff;
		.header-left{
			width: .64rem;
			float: left;
			margin-left: .2rem;
			span{
				font-size: .3rem;
			}
		}
		.header-input{
			flex:1;
			.ipt{
				width: 94%;
				border:0 none;
				outline:none;
				background-color: #fff;
				border-radius: .1rem;
				height: .64rem;
				margin-left: .2rem;
				padding:2px 10px;
				box-sizing: border-box;
			}
		}
		.header-right{
			width: 1.24rem;
			float: right;
			margin-right: 4px;
			text-align:center;
			font-size: 12px;
			color: #fff;
			@extend %ellipsis;
		}
	}
</style> 