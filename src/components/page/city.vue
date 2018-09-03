<template>
	<div>
		<div class="header">
			<router-link to='/'>
				<div class="header-left">
					<span class="iconfont">&#xe624;</span>
				</div>
			</router-link>
			<div class="right">
				城市选择
			</div>
		</div>
		<div class="header-input">
			<input type="text" class="ipt" placeholder="输入城市名">
		</div>
		<CityList :name='name'></CityList>  <!-- 向子组件传递数据 -->
		<RightList @change='asd'></RightList>
	</div>
</template>
<script>
import CityList from './citylist'
import RightList from './RightList'
	export default{
		data(){
			return {
				name:''
			}	
		},
		components:{
			CityList,
			RightList
		},
		methods:{
			asd(val){  //监听子组件传进来的数据
				this.name=val
				console.log(val)
			}
		}
	}
</script>
<style scoped lang='scss'>
		@import '../css/all.styl';
		$color:red;
	    .ipt::-webkit-input-placeholder{
	        color:$color;
	        text-align: center;
	    }
		.header{
			line-height: 30px;
			background:$bg;
			display: flex;
			span{
				color: #fff;
				font-weight: bold;
			}
			.header-left{
				width: .64rem;
				float: left;
				margin-left: .2rem;
				span{
					font-size: .3rem;
				}
			}
			.right{
				// width: 1.24rem;
				flex:1;
				text-align:center;
				font-size: 12px;
				color: #fff;
				@extend %ellipsis;
				margin-left: -24px;
			}
		}

			.header-input{
				flex:1;
				background:$bg;
				padding: 6px 0;
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
</style> 