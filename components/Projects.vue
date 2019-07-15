<template>
	<div :class="$style.projects">

		<ProjectItem
			v-for="(project, index) in projects"
			:key="index"
			:project="project"
			v-revealOnScroll
		/>
	</div>
</template>

<script>
import ProjectItem from "~/components/ProjectItem.vue";

export default {
	props: {
		projects: {
			type: Array,
			required: true
		}
	},
	data() {
		return {};
	},
	methods: {},
	directives: {
		revealOnScroll: {
			inViewport(el) {
				const rect = el.getBoundingClientRect();
				return !(
					rect.bottom < 0 ||
					rect.right < 0 ||
					rect.left > window.innerWidth ||
					rect.top > window.innerHeight
				);
			},
			bind: function(el, binding, vnode) {
				el.classList.add(vnode.context.$style.hidden);
				vnode.context.$nextTick(() => {
					el.onScroll = () => {
						if (binding.def.inViewport(el)) {
							el.classList.add(vnode.context.$style.visible);
							el.classList.remove(vnode.context.$style.hidden);
							binding.def.unbind(el, binding);
						}
					};
					el.onScroll();
					document.addEventListener("scroll", el.onScroll);
				});
			},
			unbind(el, binding) {
				document.removeEventListener("scroll", el.onScroll);
				delete el.onScroll;
			}
		}
	},

	components: {
		ProjectItem
	}
};
</script>
<style lang="postcss" module>
.projects {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 5px;
	justify-items: center;
	max-width: 1024px;
	margin: 40px auto 0;
}
.hidden {
	opacity: 0;
}
.visible {
	animation-duration: 0.75s;
	animation-name: fadeInUp;
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translate3d(0, 100%, 0);
	}

	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}
</style>

