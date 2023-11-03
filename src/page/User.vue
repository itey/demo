<template>
	<el-container class="user-container">
		<el-aside width="177px" class="left">
			<el-menu :router="true" text-color="#FFFFFF" active-text-color="#00F9E5">
				<el-menu-item v-for="(item,index) in menuList" :key="index" :index="`/${item.path}`">
					<div class="menu-item-content" :class="{
						select:$route.path.includes(item.path)
					}">
						<img style="width: 20px;height: 20px;"
							:src="require(`@/assets/images/user/${item.path}${$route.path.includes(item.path)?'-light':''}.png`)" />
						<div class="menu-text text-color">{{item.text}}</div>
					</div>
				</el-menu-item>
			</el-menu>
		</el-aside>
		<el-main class="right">
			<router-view></router-view>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'user-view',
		data() {
			return {
				menuList: [{
						path: 'balance',
						text: 'Balance',
					},
					{
						path: 'nfts',
						text: 'NFTs',
					}, {
						path: 'profile',
						text: 'Profile',
					},
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.user-container {
		display: flex;
		padding: 33px 0 50px 0;

		.el-aside {
			overflow: initial;
			background: #1A2027;
			border-radius: 8px;

			.el-menu-item:focus,
			.el-menu-item:hover {
				outline: 0;
				background-color: transparent;
			}

			.menu-item-content {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 0 14px;
				margin: 20px 0;
				font-family: Arial;
				font-size: 16px;
				font-weight: bold;

				.menu-text {
					line-height: 58px;
					height: 58px;
					margin-left: 10px;
				}

				&.select {
					background: #37434D;
					border-radius: 10px;

					.menu-text {
						color: #00F9E5;
					}
				}
			}
		}

		.el-main {
			padding: 0 0;
			margin-left: 33px;
			background: #1A2027;
			border-radius: 8px;
			overflow: hidden;
		}
	}
</style>