<template>
	<div class="profile-container">
		<div class="profile-title text-color">
			Profile
		</div>
		<div class="form-container">
			<div class="form-item">
				<div class="form-label">
					Cover Image
				</div>
				<div class="form-value">

				</div>
			</div>
			<div class="form-item">
				<div class="form-label">
					Aias
				</div>
				<div class="form-value">
					<el-input></el-input>
					<div class="form-tip">
						Alias to be displayed on the public profle page
					</div>
				</div>
			</div>
			<div class="form-item" style="margin-top: 41px;">
				<div class="form-label">
					Short Description
				</div>
				<div class="form-value">
					<el-input></el-input>
					<div class="form-tip">
						Short bio to be displayed on the public prohle page
					</div>
				</div>
			</div>
		</div>
		<div style="height: 1px;background: #1E252D;"></div>
		<div class="profile-sub-title text-color">
			Social accounts
		</div>
		<div class="form-container">
			<div class="form-item">
				<div class="form-label">
					Locaition
				</div>
				<div class="form-value">
					<el-input></el-input>
				</div>
			</div>
		</div>
		<div class="form-container">
			<div class="form-item">
				<div class="form-label">
					Twitter
				</div>
				<div class="form-value">
					<el-input></el-input>
				</div>
			</div>
		</div>
		<div class="form-container">
			<div class="form-item">
				<div class="form-label">
					Telegram
				</div>
				<div class="form-value">
					<el-input></el-input>
				</div>
			</div>
		</div>
		<div class="form-container">
			<div class="form-item">
				<div class="form-label">
					Facebook
				</div>
				<div class="form-value">
					<el-input></el-input>
				</div>
			</div>
		</div>
		<div class="form-container">
			<div class="form-item">
				<div class="form-label">
					Tiktok
				</div>
				<div class="form-value">
					<el-input></el-input>
				</div>
			</div>
		</div>
		<div class="form-container">
			<div class="form-item">
				<div class="form-label">
					Website
				</div>
				<div class="form-value">
					<el-input></el-input>
				</div>
			</div>
		</div>
		<div class="form-container">
			<div class="form-item">
				<div class="form-label">
					Instagram
				</div>
				<div class="form-value">
					<el-input></el-input>
				</div>
			</div>
		</div>
		<div class="form-container">
			<div class="form-item">
				<div class="form-label">
					youtube
				</div>
				<div class="form-value">
					<el-input></el-input>
				</div>
			</div>
		</div>
		<div class="form-container">
			<div class="form-item">
				<div class="form-label">
					Github
				</div>
				<div class="form-value">
					<el-input></el-input>
				</div>
			</div>
		</div>
		<div class="form-container">
			<div class="form-item">
				<div class="form-label">
					Wechat
				</div>
				<div class="form-value">
					<el-input></el-input>
				</div>
			</div>
		</div>
		<div class="btn-container">
			<el-button class="common-btn2">Save</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'profile-view',
	}
</script>
<style lang="scss">
	.profile-container {
		text-align: left;

		.profile-title {
			margin: 32px 22px;
			font-size: 23px;
			font-family: Source Han Sans CN;
			font-weight: bold;
		}

		.profile-sub-title {
			font-size: 13px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			margin-left: 22px;
		}

		.form-container {
			.form-item {
				margin-top: 17px;
				display: flex;
				flex-direction: row;

				.form-label {
					line-height: 35px;
					font-size: 13px;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #9FAEC0;
					width: 156px;
					padding-left: 33px;
				}

				.form-value {
					.form-tip {
						font-size: 9px;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #707D8C;
						margin-top: 12px;
					}
				}
			}
		}

		.btn-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: right;
			padding:41px 54px 47px 0 ;
		}
	}

	.el-input__inner {
		width: 524px;
	}
</style>