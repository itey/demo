<template>
	<div class="market-container">
		<el-breadcrumb style="margin-top: 27px;" separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
			<el-breadcrumb-item>Marketplace</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="title-container">
			<span class="text-color title">ALL DOUJI NFTs</span>
			<span class="text-sub-color sub">28,308 result</span>
		</div>
		<div class="search-container">
			<el-select v-model="typeValue" style="width: 150px;" filterable placeholder="ALL Types">
				<el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="categonValues" style="width: 284px;" multiple filterable allow-create
				placeholder="ALL Categons">
				<el-option v-for="item in categonOptions" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="pltformValue" style="width: 150px;" filterable placeholder="ALL Pltforms">
				<el-option v-for="item in pltformOptions" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="viewedValue" style="width: 150px;" filterable placeholder="Most viewed">
				<el-option v-for="item in viewedOptions" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-input style="width: 248px;" placeholder="Search by name or Token ID">
				<i slot="prefix" class="el-input__icon el-icon-search"></i>
			</el-input>
		</div>
		<div class="content">
			<div class="list">
				<div v-for="(item,index) in list" :key="index" class="item">
					<product-item></product-item>
				</div>
			</div>
			<el-pagination style="width:100%;margin: 20px 0;" background layout="pager,next" next-text="下一页"
				:pager-count="4" :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import ProductItem from '@/components/ProductItem'
	export default {
		name: 'market-view',
		components: {
			ProductItem
		},
		data() {
			return {
				typeOptions: [{
					value: 'type1',
					label: 'type1'
				}, {
					value: 'type2',
					label: 'type2'
				}],
				typeValue: '',
				categonOptions: [{
					value: 'categons1',
					label: 'categons1'
				}, {
					value: 'categons2',
					label: 'categons2'
				}],
				categonValues: '',
				pltformOptions: [{
					value: 'pltforms1',
					label: 'pltforms1'
				}, {
					value: 'pltforms2',
					label: 'pltforms2'
				}],
				pltformValue: '',
				viewedOptions: [{
					value: 'viewed1',
					label: 'viewed1'
				}, {
					value: 'viewed2',
					label: 'viewed2'
				}],
				viewedValue: '',
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
	.market-container {
		.title-container {
			text-align: left;
			margin: 25px 0;
			display: flex;
			align-items: baseline;

			.title {
				font-size: 26px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				line-height: 26px;
				text-align: left;
			}

			.sub {
				font-size: 9px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #99B5C4;
				line-height: 9px;
				margin-left: 7px;
			}
		}

		.search-container {
			height: 52px;
			background: #1A2027;
			border-radius: 6px;
			padding: 11px 12px;
			margin: 40px 0 14px 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
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