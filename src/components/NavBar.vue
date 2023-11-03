<template>
	<div class="navbar-container">
		<img @click="$router.push('/profile')" style="width: 120px; height: 27px;cursor: pointer;" src="@/assets/logo.png" />
		<div class="navbar-divider"></div>
		<div class="navbar-menu">
			<el-menu mode="horizontal" :router="true">
				<el-menu-item index="/">{{$t('common.home')}}</el-menu-item>
				<el-menu-item index="/news">{{$t('common.news')}}</el-menu-item>
				<el-menu-item index="/navigation">{{$t('common.navigation')}}</el-menu-item>
				<el-menu-item index="/market">{{$t('common.marketplace')}}</el-menu-item>
				<el-menu-item index="/creator">{{$t('common.create')}}</el-menu-item>
			</el-menu>
		</div>
		<div v-show="!$store.state.user.token">
			<Particle :theme="$store.state.common.theme" :isLogout="$store.state.user.logout" :lang="$i18n.locale"
				:openAccount="$store.state.common.openAccount" :openBuy="$store.state.common.openBuy" />
		</div>
		<div v-if="$store.state.user.token" class="user-container">
			<div class="wallet">
				<img class="icon" src="@/assets/images/user-wallet.png" />
				<div>{{ $store.state.chain.balanceMbd | decimalPlace4 }} MBD</div>
				<div class="divider"></div>
				<div>{{ $store.state.chain.balanceBnb | decimalPlace4 }} BNB</div>
			</div>
			<div @click="userMenuVisible = true">
				<el-popover :visible-arrow="false" v-model="userMenuVisible">
					<div class="menu-container">
						<img @click="userMenuVisible = false" class="close" src="@/assets/images/menu-close.png" />
						<div class="item">
							<div class="icon">
								<img style="width: 17px; height: 17px;" src="@/assets/images/user-icon.png" />
							</div>
							<span>{{ $store.state.user.account | omitAddress }}</span>
						</div>
						<div class="item" :class="{
								item_select:$route.path.startsWith('/user')
							}" @click="menuClick('/user/balance')">
							<div class="icon">
								<img style="width: 12px; height: 12px;" src="@/assets/images/menu-user.png" />
							</div>
							<span>User Center</span>
						</div>
						<div class="item" v-if="$store.state.common.isParticleProvider" @click="openWalletModal()">
							<div class="icon">
								<img style="width: 17px; height: 13px;" src="@/assets/images/menu-wallet.png" />
							</div>
							<span>Wallet</span>
						</div>
						<div class="item" v-if="$store.state.common.isParticleProvider" @click="openBuyModal()">
							<div class="icon">
								<img style="width: 18px; height: 14px;" src="@/assets/images/menu-currency.png" />
							</div>
							<span>Buy Crypto Currency</span>
						</div>
						<div class="item" @click="handleCopyAddress()">
							<div class="icon">
								<img style="width: 17px; height: 17px;" src="@/assets/images/menu-copy.png" />
							</div>
							<span>Copy Address</span>
						</div>
						<div class="item" @click="signOutClick">
							<div class="icon">
								<img style="width: 14px; height: 12px;" src="@/assets/images/menu-exit.png" />
							</div>
							<span>Sign Out</span>
						</div>
					</div>
					<div slot="reference" class="user">
						<img style="width: 17px; height: 17px;" src="@/assets/images/user-icon.png" />
						<span class="text">
							{{ $store.state.user.account | omitAddress }}
							<i class="el-icon-caret-bottom el-icon--right"></i>
						</span>
					</div>
				</el-popover>
			</div>
		</div>
		<div class="navbar-language" @click="languageVisible = true">
			<el-popover placement="bottom" width="79px" height="79px" :visible-arrow="false" v-model="languageVisible">
				<div class="language-select">
					<div @click="languageClick('en')" class="select"
						:class="$store.state.common.language=='en'?'select-light':''">English</div>
					<div @click="languageClick('zh_hant')" class="select"
						:class="$store.state.common.language=='zh_hant'?'select-light':''">繁體中文</div>
				</div>
				<img slot="reference" style="width: 16px; height: 16px;padding: 4px 4px;"
					src="@/assets/images/language.png" />
			</el-popover>
		</div>
		<div v-if="$store.state.common.theme=='light'" style="margin-right:14px;cursor: pointer;"
			@click="themeClick('dark')">
			<img style="width: 18px; height: 17px;" src="@/assets/images/theme-light.png" />
		</div>
		<div v-else style="margin-right:14px;cursor: pointer;" @click="themeClick('light')">
			<img style="width: 13px; height: 13px;padding: 2.5px 2.5px;" src="@/assets/images/theme-dark.png" />
		</div>
	</div>
</template>

<script>
	import Particle from '@/components/react-app/particle'
	export default {
		name: 'nav-bar',
		components: {
			Particle,
		},
		data() {
			return {
				languageVisible: false,
				userMenuVisible: false,
			}
		},
		methods: {
			themeClick(theme) {
				this.$store.commit('setTheme', theme)
			},
			languageClick(locale) {
				this.languageVisible = false
				this.$i18n.locale = locale
				this.$store.commit('setLanguage', locale)
			},
			menuClick(path) {
				this.userMenuVisible = false
				if (!this.$route.path.includes(path)) {
					this.$router.push(path)
				}
			},
			openWalletModal() {
				this.$store.commit('setOpenAccount', true)
				this.userMenuVisible = false
			},
			openBuyModal() {
				this.$store.commit('setOpenBuy', true)
				this.userMenuVisible = false
			},
			handleCopyAddress() {
				this.$copyText(this.$store.state.user.account).then(
					() => {
						this.$toast.success(this.$t('common.copied_success'))
					},
					() => {
						this.$toast.error(this.$t('copied_failed'))
					}
				)
			},
			signOutClick() {
				this.userMenuVisible = false
				this.$store.dispatch('Logout')
			},
		},
	}
</script>

<style lang="scss" scoped>
	.navbar-container {
		width: 100%;
		max-width: 1037px;
		display: flex;
		flex-direction: row;
		align-items: center;

		.navbar-divider {
			margin-left: 29px;
			margin-right: 12px;
			height: 14px;
			width: 1px;
			background: #ffffff;
		}

		.navbar-menu {
			flex: 1;
		}

		.navbar-language {
			width: 24px;
			height: 24px;
			background: #2a333e;
			border-radius: 5px;
			cursor: pointer;
			margin: 0 18px;
		}

		.user-container {
			display: flex;
			flex-direction: row;
			align-items: center;

			.wallet {
				display: flex;
				flex-direction: row;
				align-items: center;
				background: #212a35;
				border-radius: 14px;
				height: 27px;
				font-size: 10px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #90a9c6;
				padding: 0 13px;

				.icon {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 12px;
					height: 12px;
					margin-right: 8px;
				}

				.divider {
					width: 1px;
					height: 13px;
					background: #2c3846;
					margin: 0 7px;
				}
			}

			.user {
				font-size: 10px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #ffffff;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-left: 13px;
				cursor: pointer;

				.text {
					margin: 0 6px;
				}
			}
		}
	}

	.el-popover {
		.language-select {
			margin: 9px 7px;

			.select {
				width: 65px;
				font-size: 11px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				text-align: center;
				color: #ffffff;
				display: flex;
				align-items: center;
				justify-content: center;

				&:not(:last-child) {
					margin-bottom: 9px;
				}

				&.select-light {
					height: 31px;
					background: #3a4a5c;
					border-radius: 8px;
					color: #00fbe6;
					line-height: 31px;
				}
			}
		}

		.menu-container {
			position: relative;
			width: 237px;
			padding: 14px 0;

			.close {
				width: 9px;
				height: 9px;
				padding: 10px;
				position: absolute;
				top: 7px;
				right: 4px;
				cursor: pointer;
			}

			.item {
				display: flex;
				flex-direction: row;
				align-items: center;
				line-height: 31px;
				cursor: pointer;
				padding: 0 10px;


				&.item_select {
					background: #3a4a5c;
				}

				.icon {
					width: 17px;
					height: 17px;
					margin-right: 7px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				span {
					font-size: 10px;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #ffffff;
				}
			}
		}
	}
</style>