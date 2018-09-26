<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav-title
                            nav_title="文章列表">
                    </nav-title>
                    <div class="add_button" @click="addArticle">添加文章</div>
                    <single-item
                            v-for="item in articleData"
                            :item = "item"
                            :key="item.aid"></single-item>
                    <mu-pagination
                            v-if="articleData.length !== 0"
                            class="user_page"
                            :total="total"
                            :defaultPageSize="size"
                            @pageChange="pageChange"
                            :current="index"
                            :pageSize="size"></mu-pagination>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
	import SingleItem from '../components/common/SingleItem.vue';
	import NavFooter from '../components/common/Footer.vue';
	import NavTitle from '../components/common/Title.vue';
	import {mapMutations, mapState, mapActions} from 'vuex';

	export default {
		name: 'comment',
		props: ['id'],
		components: {
			SingleItem,
			NavFooter,
			NavTitle
		},
		mounted: function () {
			this.getArticelList({
				index: this.index,
				size: this.size,
			});
		},
		computed: {
			...mapState({
				index: state => state.Ui.index,
				size: state => state.Ui.size,
				articleData: state => state.ArticleList.articleData,
				total: state => state.ArticleList.total,
			}),
		},
		methods: {
			pageChange: function (value) {
				this.pagination({index: value, size: 10});
				this.getArticelList({
					index: this.index,
					size: this.size,
				});
			},
			addArticle: function () {
			    this.$router.push('/articleedit');
			},
			...mapMutations({
				pagination: 'PAGINATION'
			}),
			...mapActions({
				getArticelList: 'GETARTICLELIST',
			})
		}
	}
</script>

<style lang="less" scoped>
    .col-md-12{
        position: relative;
        .add_button{
            position: absolute;
            top: 32px;
            right: 15px;
            padding: 5px 20px;
            background-color: #ffcb17;
            color: #4c4c4c;
            cursor: pointer;
        }
    }
    .user_page {
        padding: 20px 0 30px 0;
        justify-content: center;
        align-items: center;
    }
</style>
