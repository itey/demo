<template>
	<div class="comparison-tab">
		<div class="tab-header">
			<div class="tab-header-item text-color" :class="{
				select:currentIndex==0
			}" @click="currentIndex = 0">Rich production tools and resources</div>
			<div class="tab-header-item text-color" :class="{
				select:currentIndex==1
			}" @click="currentIndex = 1">Creators have full rights</div>
			<div class="tab-header-item text-color" :class="{
				select:currentIndex==2
			}" @click="currentIndex = 2">Content NFT DAO Governance Model</div>
			<div class="tab-header-item text-color" :class="{
				select:currentIndex==3
			}" @click="currentIndex = 3">Diversifed Revenue Models</div>
			<div class="tab-header-item text-color" :class="{
				select:currentIndex==4
			}" @click="currentIndex = 4">Income is controllable and settlement is timely</div>
			<div class="tab-header-item text-color" :class="{
				select:currentIndex==5
			}" @click="currentIndex = 5">Platform DAO governance model</div>
		</div>
		<div style="flex:1;">
			<div v-if="currentIndex==0" class="tab-item tab1">
				<div class="tab-row">
					<img style="width: 192px;height:119px;" src="@/assets/images/home/ai.png" />
					<div class="tab-row-text">
						<div class="title">Al-assisted Production Tools</div>
						<div class="desc">
							The platform continues to introduce rich text.picture, audio, and video AGC
							tools to assist a largebase of interested users to complete contentproduction
							and creation more effciently and quicklytransform them into new creators, and
							improve thelcreative standards.
						</div>
					</div>
				</div>
				<div class="tab-row">
					<div class="tab-row-text">
						<div class="title">Content Production Resources</div>
						<div class="desc">
							The platform provides an Al Prompt copyright tradingmarket which collects a
							large number of Promoresources provided by professional Al developersmaking it
							convenient for intereusers to creatAlGC through Prompt, greatly reducing the
							thresholfor content production and production
						</div>
					</div>
					<img style="width: 112px;height:122px;" src="@/assets/images/home/resource.png" />
				</div>
			</div>
			<div v-if="currentIndex==1" class="tab-item tab2">
				<div class="item">
					<img style="width: 102px;height:103px;" src="@/assets/images/home/ownership.png" />
					<div class="title">Content Data Ownership</div>
					<div class="desc">
						The content exists independently of the platform and is not subject to strong
						constraints and restrictions by the platform. The works are based on standardized
						NFT token issuance standards and can achievecross-platform circulation.
					</div>
				</div>
				<div class="item">
					<img style="width: 94px;height:93px;" src="@/assets/images/home/ownershi.png" />
					<div class="title">User data ownershi</div>
					<div class="desc">
						TThe result data of the interaction between creators and fans will become an integral
						part of the value of the creator's works and wil not be distributed and distributed
						centrally by theplatform.
					</div>
				</div>
				<div class="item">
					<img style="width: 102px;height:103px;" src="@/assets/images/home/ownershir.png" />
					<div class="title">Income Distribution Ownershir</div>
					<div class="desc">
						The creator income model inot determined by the platform, nor does it depeno on
						advertisers or sponsorsand can be diversifed anddefned by themselves. And the amount
						of income can beplanned and controlled by the creator.
					</div>
				</div>
			</div>
			<div v-if="currentIndex==2" class="tab-item tab3">
				<div class="tab-tip">
					The platform helps creators form an NFT DAO governance community centered on their works
				</div>
				<div class="tab-bottom">
					<div class="tab-row">
						<img style="width: 126px;height:109px;" src="@/assets/images/home/creation.png" />
						<div class="tab-row-text">
							<div class="title">Co-creation</div>
							<div class="desc">
								Creators can incorporate their fans or other creators into the closedNFT DAO
								goverance modelloop of content productionv through theallowina them to become
								co.creators of the work and cobenehciaries of future value.
							</div>
						</div>
					</div>
					<div class="tab-row">
						<div class="tab-row-text">
							<div class="title">Content revenue and distribution governance</div>
							<div class="desc">
								Creators can incorporate their fans or other creators into the closecoop of
								content production through the NFT DAO goverance modelllowing them to become co
								creators of the work and co.benefciaries of future value.
							</div>
						</div>
						<img style="width: 109px;height:110px;" src="@/assets/images/home/governance.png" />
					</div>
				</div>
			</div>
			<div v-if="currentIndex==3" class="tab-item tab4">
				<div class="tab-tip">
					The platform helps creators form an NFT DAO governance community centered on their works
				</div>
				<div class="tab-bottom">
					<div class="item">
						<img style="width: 26px;height:25px;" src="@/assets/images/home/num1.png" />
						<div class="tab-item-text">
							<div class="title">Income from reading content</div>
							<div class="desc">
								Users who browse the reading platformcontent will be able to
								obtaincorresponding reading benefts based on
							</div>
						</div>
					</div>
					<div class="item">
						<img style="width: 26px;height:25px;" src="@/assets/images/home/num2.png" />
						<div class="tab-item-text">
							<div class="title">Content value-added income</div>
							<div class="desc">
								UThe creator's content will increase in valuein the future as the
								browsing time and faninteraction data increase so that thecreator can obtain
								premium income fromthe copyright NFT held.
							</div>
						</div>
					</div>
					<div class="item">
						<img style="width: 26px;height:25px;" src="@/assets/images/home/num3.png" />
						<div class="tab-item-text">
							<div class="title">Content copyright distribution income</div>
							<div class="desc">
								Creators can issue NFIT copyright certifcates baseoon a fxed total amount of
								content, sell NFTcopyrights through the primary market, and obtain90% of the
								revenue based on the actual transactior
							</div>
						</div>
					</div>
					<div class="item">
						<img style="width: 26px;height:25px;" src="@/assets/images/home/num4.png" />
						<div class="tab-item-text">
							<div class="title">Content copyright transaction income</div>
							<div class="desc">
								As long as the NFT copyright of the content is tradecon the secondary market,
								the creator and other NFTDAO members can obtain corresponding incomeaccording to
								the proportion set by the NFT DAO.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-if="currentIndex==4" class="tab-item tab3">
				<div class="tab-tip">
					Based on the open and transparent algorithm of smart contracts, creators can fairly
					participate in theprocess of obtaining income, and there is no problem of platform
					blackbox operation and kol runningon creative income.
				</div>
				<div class="tab-bottom">
					<div class="tab-row">
						<img style="width: 144px;height:107px;" src="@/assets/images/home/amount.png" />
						<div class="tab-row-text">
							<div class="title">The amount of income is controllable</div>
							<div class="desc">
								The creator's income from creation is only related to the incrementavalue of his
								own work data. Creators only need to focus their timeand energy on creating more
								and better works and communicatingwith fans. They do not need to worry about the
								impact of platformtraffc and other factors on creative income.
							</div>
						</div>
					</div>
					<div class="tab-row">
						<div class="tab-row-text">
							<div class="title">Revenues can be settled in real time</div>
							<div class="desc">
								The income eamed by the creator is automatically calculated by thesmart
								contract. The creator can settle the income at any time asneeded. After the
								settlement is completed, the income will bedirectly credited to the account
								without the need for approval fromothers or transfer.
							</div>
						</div>
						<img style="width: 109px;height:110px;" src="@/assets/images/home/revenue.png" />
					</div>
				</div>
			</div>
			<div v-if="currentIndex==5" class="tab-item tab3">
				<div class="tab-tip">
					DOUJI.Al itself is a DAO. All participating roles in the ecosystem can obtain the
					govemance rights anddividend rights of the platform DAO by staking the equity token MS
					of the platform.
				</div>
				<div class="tab-bottom">
					<div class="tab-row">
						<img style="width: 108px;height:107px;" src="@/assets/images/home/dao.png" />
						<div class="tab-row-text">
							<div class="title">Platform DAO governance rights</div>
							<div class="desc">
								DAO members will have the power to optimize andadjust the parameters of future
								token issuance andrevenue distribution rules of smart contracts byinitiating
								proposal bidding and voting.
							</div>
						</div>
					</div>
					<div class="tab-row">
						<div class="tab-row-text">
							<div class="title">Platform dividend rights</div>
							<div class="desc">
								DAO members automatically become de factoshareholders of the platform, and every
								income of theplatform will be closely related to the income of eachDAO member.
							</div>
						</div>
						<img style="width: 112px;height:93px;" src="@/assets/images/home/dividend.png" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'comparison-tab',
		data() {
			return {
				currentIndex: 0
			}
		},
	}
</script>

<style lang="scss">
	.comparison-tab {
		height: 418px;
		margin-top: 60px;
		display: flex;
		flex-direction: row;
		align-content: space-between;

		.tab-header {
			width: 290px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.tab-header-item {
				font-size: 22px;
				font-family: Source Han Sans CN;
				font-weight: 800;
				line-height: 30px;
				padding-left: 9px;
				border-left: 2px solid #527293;
				font-weight: bold;
				color: #527293;
				cursor: pointer;
				text-align: left;
			}

			.select {
				color: #FFFFFF;
				border-left: 2px solid;
				border-image: linear-gradient(0deg, #4195F6, #17E7D6) 1;
			}
		}

		.tab-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			height: 418px;
			background: #1A2027;
			border: 1px solid #2C3638;
			border-radius: 6px;
			margin-left: 50px;
		}

		.tab1 {
			.tab-row {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				padding: 46px 64px;

				.tab-row-text {
					flex: 1;
					text-align: left;

					.title {
						font-size: 13px;
						font-family: Source Han Sans CN;
						font-weight: bold;
						color: #FFFFFF;
					}

					.desc {
						margin-top: 16px;
						font-size: 10px;
						font-family: Source Han Sans CN;
						font-weight: bold;
						color: #A1B5C6;
						line-height: 16px;
					}
				}
			}
		}

		.tab2 {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.item {
				flex: 1;
				height: 353px;
				border: 1px solid #2C3638;
				border-radius: 11px;
				margin: 0 16px;

				&:last-child {
					margin-left: 0;
				}

				&:first-child {
					margin-right: 0;
				}

				img {
					margin-top: 40px;
				}

				.title {
					margin-top: 0;
					text-align: center;
					font-size: 13px;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #FFFFFF;
				}

				.desc {
					text-align: left;
					margin: 17px;
					font-size: 10px;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #A1B5C6;
					line-height: 16px;
				}
			}
		}

		.tab3 {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.tab-tip {
				width: 622px;
				background: #2A343F;
				border-radius: 7px;
				line-height: 14px;
				padding: 9px;
				font-size: 12px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #8DAED5;
				margin-top: 17px;
				vertical-align: middle;
				text-align: left;
				display: flex;
				align-items: center;
			}

			.tab-bottom {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.tab-row {
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					padding: 46px 64px;

					.tab-row-text {
						flex: 1;
						text-align: left;

						.title {
							font-size: 13px;
							font-family: Source Han Sans CN;
							font-weight: bold;
							color: #FFFFFF;
						}

						.desc {
							margin-top: 16px;
							font-size: 10px;
							font-family: Source Han Sans CN;
							font-weight: bold;
							color: #A1B5C6;
							line-height: 16px;
						}
					}
				}
			}
		}

		.tab4 {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.tab-tip {
				width: 622px;
				background: #2A343F;
				border-radius: 7px;
				line-height: 14px;
				padding: 9px;
				font-size: 12px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #8DAED5;
				margin-top: 17px;
				vertical-align: middle;
				text-align: left;
				display: flex;
				align-items: center;
			}

			.tab-bottom {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;

				.item {
					width: 302px;
					height: 144px;
					margin-bottom: 19px;
					border: 1px solid #2C3638;
					border-radius: 7px;
					position: relative;

					img {
						position: absolute;
						left: -15px;
						top: 46px;
						background: #1A2027;
					}

					.title {
						font-size: 13px;
						font-family: Source Han Sans CN;
						font-weight: bold;
						color: #FFFFFF;
						text-align: center;
						margin-top: 19px;
					}

					.desc {
						margin: 16px 21px 0 28px;
						font-size: 10px;
						font-family: Source Han Sans CN;
						font-weight: bold;
						color: #A1B5C6;
						line-height: 16px;
						text-align: left;
					}
				}

			}
		}
	}
</style>