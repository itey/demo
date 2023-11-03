<template>
	<div class="product-item">
		<img style="width: 100%;height:140px;" />
		<span class="type">Midjourney</span>
		<div class="label text-color">
			dgsdgshgdgjsg'sgdsadgshgdsddfddhsjhjsh
		</div>
		<div class="product-bottom">
			<div class="bottom-left">
				<span class="value text-color">2500</span>
				<span class="transform text-sub-color">≈$0.57</span>
			</div>
			<div class="bottom-right">
				<img style="width: 16px;height: 14px;" src="@/assets/images/star.png" />
				<span class="star text-sub-color">12345</span>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'ProductItem',
		props: {
			item: {
				type: Object,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.product-item {
		position: relative;
		cursor: pointer;

		&:hover .label {
			color: #00F9E5;
		}

		.type {
			position: absolute;
			top: 9px;
			left: 11px;
			padding: 4px 9px;
			background: rgba(13, 18, 18, 0.66);
			border-radius: 3px;
			font-size: 10px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 22px;
		}

		.label {
			font-size: 10px;
			line-height: 10px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			text-align: left;
			margin: 11px 8px 0 8px;
			word-wrap: break-word;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 1;
		}

		.product-bottom {
			padding: 14px 10px 10px 10px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			.bottom-left {

				.value {
					font-size: 10px;
					line-height: 10px;
					font-family: Source Han Sans CN;
					font-weight: bold;
				}

				.transform {
					font-size: 10px;
					line-height: 10px;
					font-family: Source Han Sans CN;
					font-weight: 400;
				}
			}

			.bottom-right {
				display: flex;
				align-items: center;

				img {
					margin-right: 4px;
				}

				.star {
					font-size: 10px;
					line-height: 10px;
					font-family: Source Han Sans CN;
					font-weight: 400;
				}
			}
		}
	}
</style>