<template>
	<el-dialog custom-class="income-dialog" :visible.sync="show" width="792px">
		<div class="income-header text-color" slot="title">
			Set NFT DAO Governance
		</div>
		<div class="income-content">
			<el-table ref="multipleTable" :data="tableData" style="width: 100%"
				@selection-change="handleSelectionChange">
				<el-table-column type="selection" width="34px">
				</el-table-column>
				<el-table-column label="Token ID" width="60px">
					<template slot-scope="scope">Token ID</template>
				</el-table-column>
				<el-table-column prop="name" label="NFT name" width="150px">
				</el-table-column>
				<el-table-column prop="address" label="Bonus Dividend Pool BalancelMBD)" width="180px">
				</el-table-column>
				<el-table-column prop="address" label="Your NFTs / Members NFTs" width="150px">
				</el-table-column>
				<el-table-column prop="address" label="Stake NFT Income(MBD)" width="108px">
				</el-table-column>
			</el-table>
			<el-pagination style="width:100%;margin: 20px 0;" background layout="pager,next" next-text="下一页"
				:pager-count="4" :total="1000">
			</el-pagination>
		</div>
		</div>
		<div class="income-btn">
			<el-button class="common-btn2"></el-button>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		name: 'income-dialog',
		data() {
			return {
				show: false,
				tableData: [{}, {}]
			}
		},
		methods: {
			showDialog() {
				this.show = true
			}
		}
	}
</script>

<style lang="scss">
	.income-dialog {
		background: #1A2027;
		border: 1px solid #2C3638;
		border-radius: 12px 6px 6px 6px;

		.income-header {
			text-align: left;
			font-size: 17px;
			font-family: Arial;
			font-weight: bold;
		}

		.income-content {
			border: 1px solid #1F272F;
			padding: 24px 34px 0 34px;
			text-align: left;

			.label {
				font-size: 13px;
				font-family: Arial;
				font-weight: bold;
				color: #FFFFFF;
				margin-bottom: 14px;
			}
		}

		.income-form {
			background: #212831;
			border-radius: 11px;
			margin: 22px 0 60px 0;
			padding: 27px 0 32px 0;

		}

		.income-title {
			font-size: 14px;
			font-family: Arial;
			font-weight: bold;
			color: #17E7D6;
			margin: 0 25px;
		}

		.income-label {
			font-size: 13px;
			font-family: Arial;
			font-weight: bold;
			margin: 35px 25px 0 25px;
		}

		.income-value {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin: 14px 25px 0 25px;

			.type-item {
				min-width: 115px;
				height: 35px;
				line-height: 35px;
				background: #0E161D;
				border: 1px solid #313838;
				border-radius: 6px;
				font-size: 10px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #FFFFFF;
				margin-right: 6px;
				text-align: center;
				cursor: pointer;

				&.light {
					background: #18252F;
					border: 1px solid #2FC9BD;
					border-radius: 6px;
					font-size: 10px;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #00FBE6;
				}
			}

			.income-unit {
				margin-left: 4px;
				font-size: 10px;
				font-family: Arial;
				font-weight: bold;
				color: #00F9E5;
			}

			.verify {
				width: 72px;
				height: 35px;
				line-height: 35px;
				background: #31CAD7;
				border: 1px solid #313838;
				border-radius: 6px;
				font-size: 10px;
				font-family: Arial;
				font-weight: bold;
				color: #212831;
				text-align: center;
				margin-left: 4px;
			}
		}

		.income-add {
			width: 449px;
			height: 35px;
			line-height: 35px;
			background: #0E161D;
			border: 1px solid #313838;
			border-radius: 6px;
			font-size: 10px;
			font-family: Arial;
			font-weight: 400;
			color: #87A2B7;
			text-align: center;
			margin: 16px 0 0 25px;
		}

		.income-tip {
			font-size: 9px;
			font-family: Arial;
			font-weight: 400;
			color: #747C7C;
			margin: 9px 25px 0 25px;
		}

		.income-btn {
			margin: 43px 0 68px 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: end;

			.common-btn2 {
				width: 135px;
			}
		}
	}

	.el-dialog {
		background: #1A2027;
		border: 1px solid #2C3638;
		border-radius: 12px 6px 6px 6px;
	}

	.el-dialog__body {
		padding: 0 0;
	}

	.el-switch.is-checked .el-switch__core {
		border-color: #00F9E5;
		background-color: #00F9E5;
	}

	.el-input__inner {
		height: 35px;
		line-height: 35px;
	}

	.el-table {
		font-size: 9px;
	}

	.el-table,
	.el-table tr,
	.el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
		background-color: transparent;
	}

	.el-table th.el-table__cell {
		background-color: #252D36;
	}

	.el-table td.el-table__cell,
	.el-table th.el-table__cell.is-leaf {
		border-bottom: 1px solid #1F262E;
	}

	.el-table-column--selection .cell {
		padding-left: 11px;
		padding-right: 11px;
	}

	.el-checkbox__inner {
		background-color: transparent;
	}

	.el-checkbox__input.is-checked .el-checkbox__inner {
		background-color: #ACBCC9;
		border-color: transparent;
	}

	.el-table th.el-table__cell>.cell {
		padding-left: 0;
		padding-right: 0;
	}

	.el-table--fit {
		border-bottom: 1px solid #1F262E;
	}
</style>