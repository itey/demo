<template>
	<div class="navigation-container">
		<el-breadcrumb style="margin-top: 21px;" separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
			<el-breadcrumb-item>Navigation</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="text-color title">
			AIGC Navigation
		</div>
		<div class="content">
			<div class="list">
				<div v-for="(item,index) in list" :key="index" class="item">
					<navigation-item></navigation-item>
				</div>
			</div>
			<el-pagination style="width:100%;margin: 28px 0;" background layout="pager,next" next-text="下一页"
				:pager-count="4" :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import NavigationItem from '@/components/NavigationItem'
	export default {
		name: 'navigation-view',
		components: {
			NavigationItem
		},
		data() {
			return {
				list: []
			}
		},
		created() {
			for (let i = 0; i < 20; i++) {
				this.list.push({})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.navigation-container {

		.title {
			font-size: 26px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			line-height: 26px;
			text-align: left;
			margin: 24px 0;
		}

		.content {
			flex: 1;

			.list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.item {
					width: 246px;
					margin: 0 17px 17px 0;
				
					&:nth-child(4n) {
						margin-right: 0;
					}
				}
			}
		}
	}
</style>