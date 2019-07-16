<template>
	<div :class="$style.container">
		<GitHubLink :fill="'#ffffff'"/>
		<nuxt />
	</div>
</template>
<script>
import GitHubLink from "~/components/GitHubLink.vue";
export default {
	data() {
		return {};
	},
	components: {
		GitHubLink
	}
};
</script>
<style lang="postcss" module>
.container {
	max-width: 1024px;
	margin: 0 auto;
	color: #fff;
	padding-top: 60px;
	@media screen and (max-width: 720px) {
		padding: 60px 10px 0;
	}
}
</style>

