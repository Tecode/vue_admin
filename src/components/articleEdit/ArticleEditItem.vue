<template>
    <ul class="update-logedite">
        <li class="version">
            <div class="number">文章标题（必填字段）</div>
            <div class="input">
                <label>
                    <input id="title" @input="articleInput" type="text" v-model="title" placeholder="文章标题（必填字段）"/>
                </label>
            </div>
        </li>
        <li class="device">
            <div class="type">文章分类（必填字段）</div>
            <!--<div class="span_box">-->
            <!--<span @click="choiceType(100)" :class="{active: articleType === 100}">电脑端</span>-->
            <!--<span @click="choiceType(101)" :class="{active: articleType === 101}">移动端</span>-->
            <!--<span @click="choiceType(102)" :class="{active: articleType === 102}">小程序</span>-->
            <!--<span @click="choiceType(103)" :class="{active: articleType === 103}">APP客户端</span>-->
            <!--<span @click="choiceType(104)" :class="{active: articleType === 104}">PC客户端</span>-->
            <!--</div>-->
            <div class="input">
                <label>
                    <input id="articleType" @input="articleInput" type="text" v-model="articleType"
                           placeholder="文章分类（多个用中文逗号隔开）"/>
                </label>
            </div>
        </li>
        <li class="content">
            <div class="title">发表文章说明</div>
            <div>
                <div>
                    <span class="delete">编辑</span>
                </div>
                <label>
                    <input type="text" id="author" @input="articleInput" v-model="author" placeholder="编辑"/>
                </label>
            </div>
            <div>
                <div>
                    <span class="keywords">关键词</span>
                </div>
                <label>
                    <input type="text" id="keyWords" @input="articleInput" v-model="keyWords" placeholder="关键词"/>
                </label>
            </div>
            <div>
                <div>
                    <span class="discript">文章描述</span>
                </div>
                <label>
                    <textarea id="discript" @input="articleInput" v-model="discript" placeholder="文章描述">
                    </textarea>
                </label>
            </div>
            <div>
                <div>
                    <span class="keywords">文章名称（需要后缀名<a target="_blank" href="https://editor.soscoon.com/">编辑文章</a>）</span>
                </div>
                <label>
                    <input type="text" id="fileName" @input="articleInput" v-model="fileName" placeholder="文件名+后缀名"/>
                </label>
            </div>
        </li>
        <li class="image-update">
            <div class="title">图片上传</div>
            <div class="update-box clearfix">
                <el-upload
                        class="upload-demo pull-left"
                        drag
                        action="/upload"
                        :on-success="imageOk"
                        accept="image">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <div class="image pull-left" :style="{backgroundImage: `url(${updateImage})`}"></div>
            </div>
        </li>
        <li class="content">
            <div class="title">编辑内容</div>
            <div id="Edit"></div>
        </li>
        <li class="tips clearfix">
            <p>提示：编辑完成后记得保存</p>
            <p class="save" @click="articleSave(callBack)">保存</p>
            <p class="add-tips">新增更新说明</p>
        </li>
    </ul>
</template>

<script>
	import AticalTitle from '../common/Title.vue'
	import {mapMutations, mapState, mapActions} from 'vuex';
	let editor = '';

	export default {
		name: 'comment',
		props: ['id'],
		components: {
			AticalTitle
		},
		mounted: function () {
			if (this.$route.params.id) {
				this.getArticle(this.$route.params.id)
			}
			const E = window.wangEditor;
			editor = new E('#Edit');
			editor.customConfig.uploadImgShowBase64 = true;
			editor.customConfig.zIndex = 100;
			editor.customConfig.uploadImgHooks = {
				before: function (xhr, editor, files) {
					// 图片上传之前触发
					// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
				},
				success: function (xhr, editor, result) {
					// 图片上传并返回结果，图片插入成功之后触发
					// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
				},
				fail: function (xhr, editor, result) {
					// 图片上传并返回结果，但图片插入错误时触发
					// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
				},
				error: function (xhr, editor) {
					// 图片上传出错时触发
					// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
				},
				timeout: function (xhr, editor) {
					// 图片上传超时时触发
					// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
				},

				// 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
				// （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
				customInsert: function (insertImg, result, editor) {
					// 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
					// insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

					// 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
					if (result) {
						result.data.map((url) => {
							insertImg(url)
						})
					}

					// result 必须是一个 JSON 格式字符串！！！否则报错
				}
			};
			// 将图片大小限制为 3M
			editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
			editor.customConfig.uploadImgServer = '/upload';
			editor.create();
			// 将创建的对象定为window对象，为了库追加内容
			window.editor = editor;
		},
		computed: {
			...mapState({
				title: state => state.ArticleEdit.title,
				articleType: state => state.ArticleEdit.articleType,
				author: state => state.ArticleEdit.author,
				keyWords: state => state.ArticleEdit.keyWords,
				discript: state => state.ArticleEdit.discript,
				updateImage: state => state.ArticleEdit.updateImage,
				content: state => state.ArticleEdit.content,
				fileName: state => state.ArticleEdit.fileName,
			}),
		},
		data () {
			return {
				callBack: {
					fn: function () {
						return editor.txt.html()
					},
					goBack: this.back,

				}
			}
		},
		methods: {
			imageOk: function (response, file, fileLis) {
				this.thumbnail(response.data[0])
			},
			// 回调函数返回文章列表
			back: function () {
				this.$router.push('/articlelist');
			},
			...mapMutations({
				articleInput: 'ARTICLE_INPUT',
				choiceType: 'ARTICLE_CHOICE_TYPE',
				thumbnail: 'THUMBNAIL_SAVE',
				reaetAticleStore: 'RESET_ARTICLE_STORE'
			}),
			...mapActions({
				articleSave: 'ARTICLE_SAVE',
				getArticle: 'GET_ARTICLE'
			})
		},
		beforeDestroy: function () {
			this.reaetAticleStore();
		}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";

    .update-logedite {
        position: relative;
        padding-left: 25px;
        &:before {
            content: "";
            display: block;
            position: absolute;
            left: 5px;
            top: 4px;
            width: 1px;
            height: 100%;
            background-color: @background-color50;
        }
        li {
            margin-bottom: 20px;
            position: relative;
            &:before {
                content: "";
                display: block;
                position: absolute;
                left: -26px;
                top: .3em;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                box-sizing: border-box;
                background-color: #ff7300;
                border: 3px solid @background-color50;
            }
        }
        input {
            width: 720px;
            height: 34px;
            outline: none;
            text-indent: .5em;
            margin: 5px 0 15px 0;
            border: 1px solid @color204;
        }
        textarea{
            width: 720px;
            height: 90px;
            outline: none;
            text-indent: .5em;
            margin: 5px 0 15px 0;
            border: 1px solid @color204;
        }
        .version {
            .number {
                font-size: 16px;
                color: @manager_color15;
            }
        }
        .device {
            .span_box {
                margin: 10px 0;
            }
            .type {
                font-size: 16px;
                color: @manager_color15;
            }
            span {
                padding: 4px 10px;
                border: 1px solid @background-color50;
                margin: 0 15px 0 0;
                color: @background-color50;
                cursor: pointer;
                transition: all .4s;
            }
            .active {
                color: @manager_color16;
                border: 1px solid @manager_color16;
                background-color: #ffffff;
            }
        }
        .content {
            .title {
                font-size: 16px;
                color: @manager_color15;
                margin-bottom: 15px;
            }
            label {
                position: relative;
            }
            .delete, .keywords, .discript {
                line-height: 2.4em;
                padding: 5px 20px 5px 10px;
                background-color: @background-color50;
            }
        }
        .tips {
            p {
                float: right;
                cursor: pointer;
                color: @color808;
                &:first-child {
                    float: left;
                    padding-top: 5px;
                }
            }
            .save {
                padding: 5px 16px;
                background-color: @manager_color16;
                color: @white;
            }
            .add-tips {
                padding: 5px 16px;
                background-color: @background-color50;
                color: @text100;
                margin: 0 25px 0 0;
            }
        }
        #Edit {
            min-height: 800px;
        }
        .image-update {
            .title {
                font-size: 16px;
                color: @manager_color15;
                margin-bottom: 15px;
            }
            .image {
                width: 360px;
                height: 180px;
                background-color: #f1f1f1;
                border-radius: 6px;
                background-size: cover;
            }
        }
    }
</style>
