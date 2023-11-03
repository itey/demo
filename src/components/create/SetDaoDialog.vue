<template>
	<el-dialog custom-class="set-dao-dialog" :visible.sync="show" width="681px">
		<div class="set-dao-header text-color" slot="title">
			Set NFT DAO Governance
		</div>
		<div class="set-dao-top">
			<div class="label text-color">
				NFT DAO Earnings
			</div>
			<div class="set-dao-value" style="margin-left: 0;">
				<el-input class="input" placeholder="" style="width: 72px;"></el-input>
				<div class="set-dao-unit">%</div>
			</div>
			<div class="set-dao-tip" style="margin-left: 0;">
				The NFT DAO members of this item will receive <span class="text-color">10%</span> forevery sale
			</div>
			<div class="set-dao-form">
				<div class="set-dao-title">
					NFT DAO Income Distribution
				</div>
				<div class="set-dao-label text-color">
					Creators Earngings
				</div>
				<div class="set-dao-value">
					<el-input class="input" placeholder="" style="width: 72px;"></el-input>
					<div class="set-dao-unit">%</div>
				</div>
				<div style="display: flex;flex-direction: row;">
					<div class="set-dao-label text-color" style="width: 252px;margin-right: 73px;">
						Creator 1 Wallet Address
					</div>
					<div class="set-dao-label text-color">
						Proportion of revenue
					</div>
				</div>
				<div v-for="(item,index) in 2" style="display: flex;flex-direction: row;">
					<div class="set-dao-value" style="width: 325px;">
						<el-input class="input" placeholder="" style="width: 252px;"></el-input>
						<i class="el-icon-circle-check" style="color: #00F9E5;margin-left: 4px;"></i>
						<i class="el-icon-delete" style="color: #87A2B7;margin-left: 12px;"></i>
						<div class="verify">Verify</div>
					</div>
					<div class="set-dao-value" style="margin-left: 0;">
						<el-input class="input" placeholder="" style="width: 124px;"></el-input>
						<div class="set-dao-unit">%</div>
						<i class="el-icon-circle-check" style="color: #00F9E5;margin-left: 4px;"></i>
						<i class="el-icon-delete" style="color: #87A2B7;margin-left: 12px;"></i>
					</div>
				</div>
				<div class="set-dao-add">+ Add Creator</div>
				<div class="set-dao-label text-color">
					NFT holders Earngings
				</div>
				<div class="set-dao-value">
					<el-input class="input" placeholder="" style="width: 72px;"></el-input>
					<div class="set-dao-unit">%</div>
				</div>
				<div class="set-dao-tip">
					NFT holders distribute income according to the proportion of NF
				</div>
				<div class="set-dao-label text-color">
					NFT modify execution threshold
				</div>
				<div class="set-dao-value">
					<el-input class="input" placeholder="" style="width: 105px;"></el-input>
				</div>
				<div class="set-dao-tip">
					The modifcation request can only be executed when all the voting weights of the NFT DAO obtainecare greater than or equal to the threshold.
				</div>
			</div>
			<div class="btn-container">
				<el-button class="common-border-btn" plain @click="show = false">Cancel</el-button>
				<el-button class="common-btn2" style="margin-left: 59px;">Apply</el-button>
			</div>
		</div>
	</el-dialog>
</template>

<script>
	export default {
		name: 'set-dao-dialog',
		data() {
			return {
				show: false
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
	.set-dao-dialog {
		background: #1A2027;
		border: 1px solid #2C3638;
		border-radius: 12px 6px 6px 6px;

		.set-dao-header {
			text-align: left;
			font-size: 17px;
			font-family: Arial;
			font-weight: bold;
		}

		.set-dao-top {
			border: 1px solid #1F272F;
			padding:24px 34px 0 34px;
			text-align: left;

			.label {
				font-size: 13px;
				font-family: Arial;
				font-weight: bold;
				color: #FFFFFF;
				margin-bottom: 14px;
			}
		}

		.set-dao-form {
			background: #212831;
			border-radius: 11px;
			margin: 22px 0 60px 0;
			padding: 27px 0 32px 0;

		}

		.set-dao-title {
			font-size: 14px;
			font-family: Arial;
			font-weight: bold;
			color: #17E7D6;
			margin: 0 25px;
		}

		.set-dao-label {
			font-size: 13px;
			font-family: Arial;
			font-weight: bold;
			margin: 35px 25px 0 25px;
		}

		.set-dao-value {
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

			.set-dao-unit {
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

		.set-dao-add {
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

		.set-dao-tip {
			font-size: 9px;
			font-family: Arial;
			font-weight: 400;
			color: #747C7C;
			margin: 9px 25px 0 25px;
		}

		.btn-container {
			margin-top: 60px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			margin-bottom: 36px;

			.common-border-btn,
			.common-btn2 {
				width: 135px;
			}

			.common-border-btn {
				border: 1px solid #26BEEF;
				border-radius: 7px;
				font-size: 12px;
				font-family: Arial;
				font-weight: bold;
				color: #14DAEB;
				background: transparent;
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
</style>