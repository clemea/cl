<template>

	<div :class="$style.wrapper">
		<nuxt-link
			tag="a"
			:class="$style.backLink"
			to="/"
			exact
		>home</nuxt-link>

		<div :class="$style.main">
			<h1 :class="$style.title">{{story.content.title}}</h1>
			<div
				:class="$style.technologies"
				v-if="story.content.technologies"
			>
				{{story.content.technologies}}
			</div>
			<a
				:href="story.content.link.url"
				:class="$style.link"
				v-if="story.content.link.url"
			>Visit website</a>
			<section :class="$style.gallery">
				<div
					:class="$style.galleryItem"
					v-for="(item, index) in story.content.gallery"
					:key="index"
				>
					<img
						:src="item.filename"
						alt=""
						:class="$style.galleryItem__img"
					>

				</div>
			</section>
		</div>
	</div>

</template>

<script>
export default {
	// transition: "bounce",
	layout: "inner",
	data() {
		return {
			story: null
		};
	},
	asyncData(context) {
		const version =
			context.query._storyblok || context.isDev ? "draft" : "published";

		return context.app.$storyapi
			.get(`cdn/stories/${context.params.id}`, {
				version: version
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
.wrapper {
	display: flex;
	flex-direction: column;
}
.main {
}
.title {
	font-size: 30px;
	margin: 0 0 10px;

	/* color: #000; */
	color: #fff;
	letter-spacing: 1px;
}
.link {
	display: inline-block;
	color: #fff;
	/* background: #ced790; */
	background: rgba(61, 201, 179, 0.7);
	padding: 10px 30px;
	color: #000;
	text-decoration: none;
	text-transform: uppercase;
	transition: background 0.3s ease-in-out;
	letter-spacing: 1px;
	&:hover {
		background: rgba(61, 201, 179, 1);
	}
}
.backLink {
	color: #fff;
	text-decoration: underline;
	font-size: 14px;
	/* align-self: flex-end; */
	position: absolute;
    top: 10px;
}
.gallery {
	padding-top: 20px;
}
.galleryItem {
	max-width: 100%;
	overflow: hidden;
	margin-bottom: 10px;
	&__img {
		max-width: 100%;
	}
}
.technologies {
	margin: 10px 0 20px;
	font-size: 15px;
}
</style>

