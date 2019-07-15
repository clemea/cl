<template>
	<div :class="$style.container">
		<section :class="$style.intro">
			<h1 :class="$style.title">Hello, I'm Larisa. <br> I'm a front-end web developer</h1>
			<button
				type="button"
				:class="$style.introButton"
				@click="scrollToProjects"
			>Projects</button>
		</section>
		<section
			ref="projects"
			:class="$style.projectsWrap"
		>
			<Projects :projects="stories" />
		</section>
	</div>
</template>

<script>
import Projects from "~/components/Projects.vue";
export default {
	components: {
		Projects
	},
	data() {
		return {
			projects: null,
			story: { content: {} },
			stories: null
		};
	},
	methods: {
		scrollToProjects() {
			const scrolltop =
				window.pageYOffset ||
				document.documentElement.scrollTop +
					this.$refs.projects.getBoundingClientRect().top;
			this.animationScroll({
				target: scrolltop,
				padding: 20,
				duration: 400
			});
		},
		animationScroll({ target, padding = 0, duration }) {
			let temp;
			cancelAnimationFrame(temp);
			const start = performance.now();
			const from =
				window.pageYOffset || document.documentElement.scrollTop;
			const to = target;
			requestAnimationFrame(function step(timestamp) {
				let progress = (timestamp - start) / duration;
				1 <= progress && (progress = 1);
				window.scrollTo(0, (from - padding + to * progress) | 0);
				1 > progress && (temp = requestAnimationFrame(step));
			});
		}
	},
	mounted() {},

	asyncData(context) {
		const version =
			context.query._storyblok || context.isDev ? "draft" : "published";
		return context.app.$storyapi
			.get("cdn/stories/", {
				version: version,
				starts_with: "projects"
			})

			.then(res => {
				return res.data;
			})
			.catch(res => {
				context.error({
					statusCode: res.response.status,
					message: res.response.data
				});
			});
	}
};
</script>

<style lang="postcss" module>
.container {
}
.intro {
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
	background: url("~assets/img/bg.jpg") center/cover no-repeat;
	background-attachment: fixed;
}

.introButton {
	background: transparent;
	box-shadow: none;
	border: 1px solid #000;
	padding: 10px 20px;
	font-size: 18px;
	margin-top: 20px;
	cursor: pointer;

	letter-spacing: 1px;
	text-transform: uppercase;
	display: flex;
	transition: background 0.3s ease-in-out, border-color 0.3s ease-in-out;
	/* align-items: center; */
	&:after {
		content: "";
		border: solid black;
		border-width: 0 2px 2px 0;
		display: inline-block;
		padding: 5px;
		transform: rotate(45deg);
		margin-left: 15px;
	}
	&:hover {
		background: rgba(61, 201, 179, 1);
		border-color: rgba(61, 201, 179, 1);
	}
	@media screen and (max-width: 720px) {
		font-size: 18px;
	}
}

.title {
	display: block;
	font-weight: 300;
	font-size: 40px;
	color: #000;
	letter-spacing: 1px;
	@media screen and (max-width: 720px) {
		font-size: 30px;
	}
}
.projectsWrap {
}
</style>

