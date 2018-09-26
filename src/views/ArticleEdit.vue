<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <nav-title class="nav_article"
                        nav_title="文章编辑"
                        placeholder_text="545">
                </nav-title>
                <article-edit-item></article-edit-item>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticleEditItem from '../components/articleEdit/ArticleEditItem.vue'
	import NavTitle from '../components/common/Title.vue'

	export default {
		name: 'comment',
		components:{
		    ArticleEditItem,
			NavTitle
        },
		props: ['id'],
		data () {
			return {
				open: true
			}
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="less">
    .nav_article{
        margin-bottom: 40px;
    }
</style>
