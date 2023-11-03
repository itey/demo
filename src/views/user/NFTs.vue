<template>
	<div class="container">
		<div class="top">
			<div>
				<span class="text-big text-color">
					My DOUJI NFTs
				</span>
				<span class="sub-value">
					308 Items
				</span>
			</div>
			<div>
				<el-input placeholder="Search by name or Token ID">
					<i slot="prefix" class="el-input__icon el-icon-search"></i>
				</el-input>
			</div>
		</div>
		<div class="content">
			<div class="list">
				<div v-for="(item,index) in list" :key="index" class="item">
					<nft-item></nft-item>
				</div>
			</div>
			<el-pagination style="width:100%;margin: 20px 0;" background layout="pager,next" next-text="下一页" :pager-count="4" :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import NftItem from '@/components/NftItem'
	export default {
		name: 'nft-view',
		components: {
			NftItem
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
	.container {
		padding: 0 50px;
		display: flex;
		flex-direction: column;

		.top {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding: 50px 0;

			.text-big {
				font-size: 32px;
				line-height: 32px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				margin-bottom: auto;
			}

			.sub-value {
				line-height: 40px;
				font-size: 14px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #A9B7C3;
			}
		}

		.content {
			flex: 1;

			.list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.item {
					width: calc((100% - 39px) / 4);
					margin: 0 13px 13px 0;

					&:nth-child(4n) {
						margin-right: 0;
					}
				}
			}
		}
	}
</style>