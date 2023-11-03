<template>
	<div class="news-container">
		<el-breadcrumb style="margin-top: 27px;" separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
			<el-breadcrumb-item>News</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="text-color title">
			News
		</div>
		<div class="content">
			<div class="list">
				<div v-for="(item,index) in list" :key="index" class="item">
					<news-item></news-item>
				</div>
			</div>
			<el-pagination style="width:100%;margin: 28px 0;" background layout="pager,next" next-text="下一页"
				:pager-count="4" :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import NewsItem from '@/components/NewsItem'
	export default {
		name: 'news-detail-view',
		components: {
			NewsItem
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
	.news-container {
		.banner {
			margin-top: 16px;
			display: flex;
			justify-content: center;
		}

		.title {
			font-size: 26px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			line-height: 26px;
			text-align: left;
			margin: 27px 0 40px 0;
		}

		.content {
			flex: 1;

			.list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.item {
					width: calc((100% - 39px) / 4);
					min-width: 185px;
					margin: 0 13px 13px 0;
				
					&:nth-child(4n) {
						margin-right: 0;
					}
				}
			}
		}
	}
</style>