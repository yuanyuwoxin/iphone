<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont">&#xe624;</span>
		</div>
		<div class="header-input">
			<input type="text" class="ipt" v-model="val" placeholder="请输入景点...">
		</div>
		<div class="header-right">
			城市
			<span class="iconfont">&#xe64a;</span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				val:""
			}	
		},
		watch:{
			val(value){
				console.log(value)
			}
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
				padding-left: .2rem;
			}
		}
		.header-right{
			width: 1.24rem;
			float: right;
			text-align:center;
			font-size: .3rem;
		}
	}
</style> 