<template>
	<div class="news-tab-item" @click="itemClick">
		<div class="title text-color">
			dgsdgshgdgjsg'sgdsadgshgdsdd fddhsjhj shdgsdgshgdgj dgsdgshgdgjsg'sgdsadgshgdsdd fddhsjhj shdgsdgshgdgj
			sg'sgdsadgshg dsddfddhsjhjsh
		</div>
		<div class="bottom">
			<div class="sub text-sub-color">
				by <span style="color: #53CFD2;">Victor Deaw</span>
			</div>
			<div class="sub text-sub-color">
				September 21,2023
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NewsTabItem',
		props: {
			item: {
				type: Object,
			}
		},
		methods: {
			itemClick() {
				this.$router.push('/news/detail')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news-tab-item {
		cursor: pointer;
		text-align: left;
		margin: 14px 0 12px 0;
		&:hover .title {
			color: #00F9E5;
		}
		.title {
			font-size: 10px;
			font-family: Source Han Sans CN;
			font-weight: 800;
			color: #FFFFFF;
			line-height: 16px;
		}
		

		.bottom {
			margin-top: 16px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.sub {
				font-size: 9px;
				font-family: Source Han Sans CN;
				font-weight: 400;
			}
		}
	}
</style>