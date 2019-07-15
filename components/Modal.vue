<template>
	<div :class="[$style.modal, {
                [$style.modal_isActive]: true
            }]
        ">
		<div :class="$style.modal__background"></div>
		<div :class="$style.modal__content">
			<slot></slot>
		</div>
		<div :class="$style.modal__closePanel">
			<button
				type="button"
				:class="$style.modal__close"
				@click="$router.go(-1)"
			></button>

		</div>
	</div>
</template>

<script>
export default {
	props: {
		isActive: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	components: {},
	methods: {}
};
</script>
<style lang="postcss" module>
.modal {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 10;
	display: none;
	overflow: hidden;
	outline: 0;
	&_isActive {
		display: flex;
		align-items: center;
	}
}
.modal__background {
	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	background-color: rgba(10, 10, 10, 0.86);
}

.modal__content {
	margin: 0 20px;
	/* max-height: calc(100vh - 160px); */
	height: calc(100vh - 20px);
	overflow: auto;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	outline: 0;
	/* justify-content: center; */
	align-items: center;
}
.modal__closePanel {
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	/* align-items: center; */
	padding: 10px 30px;
}
.modal__close {
	user-select: none;
	appearance: none;
	background-color: rgba(10, 10, 10, 0.2);
	border: none;
	border-radius: 50%;
	cursor: pointer;
	display: inline-block;
	outline: none;
	position: relative;
	background: none;
	height: 40px;
	/* position: fixed; */
	/* right: 20px; */
	/* top: 20px; */
	width: 40px;
	&:hover {
		background-color: rgba(10, 10, 10, 0.3);
	}
}
.modal__close:before,
.modal__close:after {
	background-color: white;
	content: "";
	display: block;
	left: 50%;
	position: absolute;
	top: 50%;
	transform: translateX(-50%) translateY(-50%) rotate(45deg);
	transform-origin: center center;
}
.modal__close:before {
	height: 2px;
	width: 50%;
}
.modal__close:after {
	height: 50%;
	width: 2px;
}
/* @media screen and (min-width: 769px) {
	.modal__content{
		margin: 0 auto;
		max-height: calc(100vh - 40px);
		width: 640px;
	}
} */
</style>

