<template>
	<div class="navigation-item">
		<img style="width: 40px;height:40px;" />
		<div class="content">
			<div class="label text-color">Goodbite</div>
			<div class="sub text-sub-color">
				Cisco to Acquire Splunkfor $28 Billion in Major AlCloud Security Deal Acquire
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'NavigationItem',
		props: {
			item: {
				type: Object,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navigation-item {
		height: 101px;
		background: #1A2027;
		box-shadow: 0px 6px 13px 0px rgba(9, 11, 12, 0.85);
		border-radius: 6px;
		padding: 16px 13px;
		display: flex;
		flex-direction: row;
		cursor: pointer;

		&:hover .content .label {
			color: #00F9E5;
		}

		.content {
			flex: 1;
			margin-left: 12px;

			.label {
				font-size: 13px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				line-height: 13px;
				text-align: left;
			}

			.sub {
				line-height: 16px;
				font-size: 10px;
				font-family: Arial;
				font-weight: 400;
				color: #B2B9B9;
				margin-top: 14px;
				text-align: left;
				word-wrap: break-word;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 3;
			}
		}
	}
</style>