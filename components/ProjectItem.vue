<template>
	<div
		:class="$style.projectItem"
		:style="{
			'background-image': `url('${project.content.thumbnail}')`
		}"
	>
		<nuxt-link
			tag="a"
			:class="$style.projectItem__link"
			:to="{ name: 'projects-id', params: { 
			id: project.id, 
		 }}"
			exact
		>
			<div :class="$style.projectItem__panel">
				{{project.content.title}}
			</div>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			itemId: 1,
			modalOpen: false
		};
	},

	transition: "bounce"
};
</script>

<style lang="postcss" module>
.projectItem {
	background-size: cover;
	background-position: 50% 0;
	width: 100%;
	/* height: 450px; */
	height: 380px;
	cursor: pointer;
	transition: 0.3s transform ease-in-out, 0.3s filter ease-in-out;
	position: relative;
	filter: grayscale(0.5);
	overflow: hidden;
	&:after {
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.2);
		opacity: 0;
		transition: 0.3s opacity ease-in-out;
	}
	&:hover {
		transform: scale(0.95);
		filter: none;
		&:after {
			opacity: 1;
		}
		.projectItem__panel {
			transform: translateY(0);
		}
	}
}
.projectItem__link {
	display: block;
	width: 100%;
	height: 100%;
}
.projectItem__panel {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	/* background: rgba(255, 255, 255, 0.7); */
	background: rgba(38, 38, 38, 0.7);
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translateY(100%);
	transition: 0.3s transform ease-in-out;
	/* color: #000; */
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	padding: 0 10px;
	text-align: center;
	@media (hover: none) {
		transform: translateY(0);
	}
}
.projectItem__btn {
	background: transparent;
	font-size: 16px;
	cursor: pointer;
}
</style>

