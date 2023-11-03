<template>
  <div class="create-step2">
    <div class="title">{{edit?'Step 2 Update Content':'Step 2 Wrete Content'}}</div>
    <div class="form-container">
      <div class="form-item">
        <div class="form-label">Title*</div>
        <div class="form-value">
          <div>
            <el-input v-model="form.title" @change="checkItem('title')" class="input" maxlength="50"></el-input>
          </div>
          <div v-if="error.title" class="tip-error">{{ error.title }}</div>
          <div v-else class="tip">Name of your content name</div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">Description*</div>
        <div class="form-value">
          <div>
            <el-input v-model="form.description" @change="checkItem('description')" class="input" type="textarea" rows="3" maxlength="140"></el-input>
          </div>
          <div v-if="error.description" class="tip-error">{{ error.description }}</div>
          <div v-else class="tip">Write some details about your content</div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">Cover Image*</div>
        <div class="form-value">
          <el-upload accept=".png, .jpeg, .jpg, .gif" :show-file-list="false" class="form-upload" :on-change="fileChange" :auto-upload="false" action="#">
            <div class="form-upload-img" v-if="imageUrl">
              <img class="file-img" :src="imageUrl" />
            </div>
            <div class="form-upload-empty" v-else>
              <div class="form-upload-icon">+</div>
              <div class="form-upload-tip">Upload image,support png,gif,jpg,jpeg,webp files</div>
            </div>
          </el-upload>
          <div v-if="error.image" class="tip-error">{{ error.image }}</div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">Keyword*</div>
        <div class="form-value">
          <div>
            <!-- <el-input v-model="form.keyword" class="input"></el-input> -->
            <el-tag class="tag" :key="tag" v-for="tag in form.keyword" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            ></el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ Add</el-button>
          </div>
          <div v-if="error.keyword" class="tip-error">{{ error.keyword }}</div>
          <div v-else class="tip">Write some keywords about your content</div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">
          <div>Article content*</div>
          <div class="form-label-sub">
            <img style="width: 14px;height: 14px;" src="@/assets/images/create/website.png" />
            <div class="form-label-sub-text">Open to Access</div>
          </div>
        </div>
        <div class="form-value">
          <div style="width: 544px;">
            <PubVditor :id="'1'" ref="contentPub" :pdata="form.openContent" />
          </div>
          <div v-if="error.openContent" class="tip-error">{{ error.openContent }}</div>
          <div v-else class="tip">Write some details about your content</div>
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">
          <div>Article content</div>
          <div class="form-label-sub">
            <img style="width: 14px;height: 14px;" src="@/assets/images/create/protect.png" />
            <div class="form-label-sub-text">Protected</div>
          </div>
        </div>
        <div class="form-value">
          <div style="width: 544px;">
            <PrivateVditor :id="'2'" ref="contentPrivate" :pdata="form.protectedContent" />
          </div>
          <div class="tip">Write some details about your content</div>
        </div>
      </div>
      <div class="btn-container">
        <el-button class="common-btn2" @click="backClick">Back</el-button>
        <el-button class="common-btn2" @click="saveClick">Save</el-button>
        <el-button class="common-btn2" @click="nextClick">Next</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  default as PrivateVditor,
  default as PubVditor,
} from '../MarkdownVditor.vue'
export default {
  name: 'create-step2',
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
    metadata: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    PubVditor,
    PrivateVditor,
  },
  data() {
    return {
      markContentPub: undefined,
      markContentPrivate: undefined,
      imageFile: undefined,
      imageUrl: undefined,
      upload: {
        action: process.env.VUE_APP_BASE_URL + '/uploadFile',
        headers: {
          token: this.$store.state.user.token,
        },
        fileType: ['png', 'jpg', 'jpeg', 'gif'],
        fileSize: 0.1,
      },
      form: {
        title: undefined,
        name: undefined,
        image: undefined,
        description: undefined,
        keyword: undefined,
        openContent: undefined,
        contentUrl: undefined,
        protectedContent: undefined,
      },
      error: {},
      inputVisible: false,
      inputValue: '',
    }
  },
  mounted() {
    if (this.metadata) {
      this.form = this.metadata
    }
  },
  methods: {
    /** 获取markdown内容 */
    markdownGetValue() {
      this.markContentPub = this.$refs.contentPub.getValue()
      this.markContentPrivate = this.$refs.contentPrivate.getValue()
    },
    /** 图片选择 */
    fileChange(file) {
      this.clearError('image')
      const fileType = file.raw.type
      const fileSize = file.size
      if (fileType.indexOf('image') === -1) {
        this.$set(this.error, 'image', this.$t('common.img_format_error'))
        return
      }
      if (fileSize > this.upload.fileSize * 1024 * 1024) {
        this.$set(
          this.error,
          'image',
          this.$t('common.img_large_error', [this.upload.fileSize])
        )
        return
      }
      this.dialogImageUrl = window.URL
        ? window.URL.createObjectURL(file.raw)
        : window.webkitURL.createObjectURL(file.raw)
      this.imageUrl = this.dialogImageUrl
      this.imageFile = file
      console.log(this.imageUrl)
    },
    handleClose(tag) {
      this.form.keyword.splice(this.form.keyword.indexOf(tag), 1)
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      let inputValue = this.inputValue
      if (inputValue && this.form.keyword.indexOf(inputValue) < 0) {
        this.form.keyword.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    clearError(val) {
      this.$set(this.error, val, '')
    },
    setError(key, val) {
      this.$set(this.error, key, val)
    },
    backClick() {
      this.$emit('backClick')
    },
    saveClick() {
      this.markdownGetValue()
      this.$emit('saveClick', this.form)
      this.$toast.success(this.$t('common.save_success'))
    },
    /** 单项检查 */
    checkItem(key) {
      switch (key) {
        case 'title':
          if (!this.form.title) {
            this.setError(key, this.$t('create.title_required'))
          } else {
            this.clearError(key)
          }
          break
        case 'description':
          if (!this.form.description) {
            this.setError(key, this.$t('create.description_required'))
          } else {
            this.clearError(key)
          }
          break
        case 'image':
          if (!this.form.image) {
            this.setError(key, this.$t('create.image_required'))
          } else {
            this.clearError(key)
          }
          break
        case 'keyword':
          if (!this.form.keyword.length) {
            this.setError(key, this.$t('create.keyword_required'))
          } else {
            this.clearError(key)
          }
          break
        case 'openContent':
          if (!this.form.openContent) {
            this.setError(key, this.$t('create.content_pub_required'))
          } else {
            this.clearError(key)
          }
          break
        default:
          break
      }
    },
    /** 表单检查 */
    formCheck() {
      this.error = {}
      var ifPass = true
      if (!this.form.title) {
        this.setError('title', this.$t('create.title_required'))
        ifPass = false
      }

      if (!this.form.description) {
        this.setError('description', this.$t('create.description_required'))
        ifPass = false
      }

      if (!this.form.image) {
        this.setError('image', this.$t('create.image_required'))
        ifPass = false
      }

      if (!this.form.keyword.length) {
        this.setError('keyword', this.$t('create.keyword_required'))
        ifPass = false
      }

      if (!this.form.openContent) {
        this.setError('openContent', this.$t('create.content_pub_required'))
        ifPass = false
      }

      return ifPass
    },
    nextClick() {
      if (this.formCheck()) {
        this.$emit('nextClick')
      }
    },
  },
}
</script>

<style lang="scss">
.create-step2 {
  .title {
    margin-top: 63px;
    margin-bottom: 12px;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
    text-align: left;
  }

  .form-container {
    background: #1a2027;
    border-radius: 6px;
    padding: 58px 0 58px 163px;

    .form-item {
      display: flex;
      flex-direction: row;
      margin-top: 41px;

      .form-label {
        width: 129px;
        line-height: 35px;
        font-size: 13px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #9faec0;
        text-align: left;
      }

      .form-label-sub {
        display: flex;
        flex-direction: row;
        align-items: center;

        .form-label-sub-text {
          margin-left: 6px;
          font-size: 10px;
          font-family: Arial;
          font-weight: 400;
          color: #00f9e5;
        }
      }

      .form-value {
        text-align: left;

        .form-upload {
          width: 361px;
          height: 131px;
          background: #0e161d;
          border: 1px solid #313838;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;

          .form-upload-img {
            position: relative;

            .file-img {
              width: 361px;
              height: 131px;
            }

            .file-img-delete {
              position: absolute;
              top: 56px;
              left: calc(50% - 9px);
            }
          }

          .form-upload-icon {
            font-size: 35px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #707d8c;
          }

          .form-upload-tip {
            font-size: 9px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #707d8c;
            margin-top: 12px;
          }
        }

        .tip {
          margin-top: 12px;
          font-size: 9px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #707d8c;
        }

        .tip-error {
          margin-top: 12px;
          font-size: 9px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #a50507;
        }

        .tag {
          margin-right: 10px;
        }

        .input-new-tag {
          width: 90px;
          margin-left: 10px;
          vertical-align: bottom;
        }

        .button-new-tag {
          margin-left: 10px;
          height: 32px;
          line-height: 30px;
          padding-top: 0;
          padding-bottom: 0;
        }

        .input {
          width: 544px;
        }
      }
    }

    .btn-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 73px;
      padding-right: 163px;

      .common-btn2 {
        margin-right: 59px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

.vditor-toolbar,
.vditor-ir pre.vditor-reset:focus,
.vditor-ir pre.vditor-reset {
  background-color: transparent;
}
.vditor-reset {
  color: #ffffff;
}
</style>
