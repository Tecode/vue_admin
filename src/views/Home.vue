<template>
    <div class="home_page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <total></total>
                </div>
                <div class="col-md-12">
                    <echars-statistic></echars-statistic>
                </div>
            </div>
        </div>
        <footer-custom></footer-custom>
    </div>
</template>

<script>
	import {watchList} from '../api'
	import Total from '../components/home/Total.vue'
	import EcharsStatistic from '../components/home/EcharsStatistic .vue'
	import FooterCustom from '../components/common/Footer.vue'

	export default {
		name: 'home',
		components: {
			Total,
			EcharsStatistic,
			FooterCustom,
		},
		data () {
			return {
				currentTime: 'slide-right',
			}
		},

		computed: {},
		watch: {
			page (to, from) {
				this.loadItems(to, from)
			}
		},

		methods: {
			loadItems (to = this.page, from = -1) {
				this.$bar.start()
				this.$store.dispatch('FETCH_LIST_DATA', {
					type: this.type
				}).then(() => {
					if (this.page < 0 || this.page > this.maxPage) {
						this.$router.replace(`/${this.type}/1`)
						return
					}
					this.transition = from === -1
					? null
					: to > from ? 'slide-left' : 'slide-right'
					this.displayedPage = to
					this.displayedItems = this.$store.getters.activeItems
					this.$bar.finish()
				})
			}
		}
	}
</script>

<!--<style lang="less">-->
    <!--@import "../lib/style/color";-->

    <!--.home_page {-->
        <!---->
    <!--}-->

<!--</style>-->
