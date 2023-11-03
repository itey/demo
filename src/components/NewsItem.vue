<template>
	<div class="news-item" @click="itemClick">
		<img style="width: 100%;height:105px;" />
		<div class="label text-color">
			dgsdgshgdgjsg'sgdsadgshgdsdd fddhsjhj shdgsdgshgdgj dgsdgshgdgjsg'sgdsadgshgdsdd fddhsjhj shdgsdgshgdgj
			sg'sgdsadgshg dsddfddhsjhjsh
		</div>
		<div class="bottom">
			<div class="sub text-sub-color">
				by <span style="color:#53CFD2">Victor Deaw</span>
			</div>
			<div class="sub text-sub-color">
				September 21,2023
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NewsItem',
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
	.news-item {
		cursor: pointer;

		&:hover .label {
			color: #00F9E5;
		}

		.label {
			height: 42px;
			font-size: 10px;
			line-height: 14px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			text-align: left;
			margin-top: 14px;
			word-wrap: break-word;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 3;
		}

		.bottom {
			padding: 11px 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			.sub {
				font-size: 9px;
				line-height: 9px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #B2B9B9;
			}
		}
	}
</style>