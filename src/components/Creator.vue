<template>
	<div class="creator-container">
		<div class="content-container">
			<div class="creator-img">
				<img style="width: 118px;height: 118px" />
			</div>
			<div class="creator-info">
				<div class="creator-info-top">
					<div class="user text-color">Balances</div>
					<div class="balance-address-container">
						<div class="balance-address">OxD98232ed4...5334347287</div>
						<img style="width: 10px; height: 10px;" src="@/assets/images/user/copy.png"></img>
					</div>
				</div>
				<div class="text-sub-color desc">
					I am a highly skilled and talented prompt engineerwith exceptional ability in creating prompts
					models such as chatgpt Bing, ancBard. My focus on quality and accuracy allows me to produce
					effective and engaging prompts that capture the user' s attention and enhancethe user experience. As
					an up-and-coming prompt engineer, I am committed to continually improving my skils and bringing
					value to the fheld.
				</div>
				<div class="subscription light" v-if="subscription" @click="subscription = false">
					<img style="width: 9px;height: 9px;" src="@/assets/images/add.png" />
					<span>Subscription</span>
				</div>
				<div class="subscription" v-else @click="subscription = true">
					<img style="width: 13px;height: 9px;" src="@/assets/images/add.png" />
					<span>Subscription</span>
				</div>
				<div class="tag-container">
					<block v-for="(item,index) in tagList" :key="index">
						<div class="tag-item" :class="{
							light:item.light
						}">
							<img :src="require(`@/assets/images/creator/`+item.icon+(item.light?'light':'')+`.png`)" />
							<span>{{item.text}}</span>
						</div>
					</block>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'creator',
		data() {
			return {
				subscription:false,
				tagList:[{
					icon:'mexico',
					text:'Mexico',
				},{
					icon:'website',
					text:'Website',
				},{
					icon:'twitter',
					text:'Twitter',
				},{
					icon:'instagram',
					text:'Instagram',
				},{
					icon:'youtube',
					text:'Youtube',
				},{
					icon:'facebook',
					text:'Facebook',
				},{
					icon:'tiktok',
					text:'Tiktok',
				},{
					icon:'github',
					text:'Github',
				},{
					icon:'linkedin',
					text:'Linkedin',
				}]
			}
		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped>
	.creator-container {
		padding: 37px 0 32px 0;
		display: flex;
		align-items: center;
		justify-content: center;

		.content-container {
			width: 100%;
			max-width: 1037px;
			display: flex;
			flex-direction: row;

			.creator-img {
				width: 118px;
				height: 118px;
				background: #00F9E5;
				border: 3px solid #2C3642;
				border-radius: 14px;
				img {
					border-radius: 14px;
				}
			}

			.creator-info {
				margin-left: 20px;
				flex: 1;
				.creator-info-top {
					display: flex;
					flex-direction: row;
					align-items: baseline;
					cursor: pointer;

					.user {
						font-size: 22px;
						line-height: 22px;
						font-weight: bold;
					}

					.balance-address-container {
						background: #232A32;
						border-radius: 4px;
						display: flex;
						flex-direction: row;
						align-items: center;
						padding: 0 4px;
						margin-left: 9px;

						.balance-address {
							font-size: 10px;
							font-family: Arial;
							font-weight: bold;
							color: #99B1C4;
							line-height: 22px;
							margin-right: 7px;
						}

					}
				}

				.desc {
					margin-top: 13px;
					font-size: 10px;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #99B1C4;
					line-height: 16px;
					text-align: left;
				}

				.subscription {
					margin-top: 19px;
					height: 27px;
					border-radius: 14px;
					font-size: 10px;
					font-family: Arial;
					font-weight: bold;
					color: #A5B5C3;
					background: #657A8A;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					padding: 0 12px;
					width: 98px;
					cursor: pointer;

					&.light {
						background: #12C7B8;
						color: #FFFFFF;
					}
				}

				.tag-container {
					margin-top: 27px;
					display: flex;
					flex-direction: row;
					align-items: center;

					.tag-item {
						height: 19px;
						background: #262F39;
						border-radius: 4px;
						font-size: 10px;
						font-family: Source Han Sans CN;
						font-weight: bold;
						color: #99B1C4;
						line-height: 19px;
						display: flex;
						flex-direction: row;
						align-items: center;
						margin-left: 7px;
						padding: 0 6px;
						cursor: pointer;

						img {
							width: 9px;
							height: 9px;
							margin: 4px;
						}

						&.light {
							background: #12C7B8;
							border-radius: 4px;
							color: #FFFFFF;
						}
					}
				}
			}
		}

	}
</style>