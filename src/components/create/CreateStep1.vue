<template>
  <div class="create-step1">
    <div class="title">{{edit?'Step 1 Update NFT Infomation':'Step 1 Set NFT Mint Infomation'}}</div>
    <div class="form-container">
      <div class="label">Type</div>
      <div class="type-container" v-for="(arr, index) in typeList" :key="index">
        <div v-for="(item, i) in arr" :key="i" class="item" :class="{
					light:form.contentType == item.e_name
				}" @click="choseType(item.e_name)">
          <div>{{ $i18n.locale == 'en' ? item.e_name : item.c_name }}</div>
        </div>
      </div>
      <template v-if="categoryList.length">
        <div class="label">Category</div>
        <div class="category-container">
          <div
            class="item"
            :class="{
					light:form.category && form.category.includes(item.e_name)
				}"
            v-for="item in categoryList"
            :key="item.id"
            @click="choseCategory(item)"
          >{{$i18n.locale == 'en' ? item.e_name : item.c_name}}</div>
        </div>
        <div class="tip">Not allowed to chage after mint.</div>
      </template>

      <template v-if="platformList.length">
        <div class="label">Platform</div>
        <div class="category-container">
          <div
            class="item"
            :class="{
					light:form.prompt && form.prompt.includes(item.e_name)
				}"
            v-for="(item, index) in platformList"
            :key="index"
            @click="chosePlatform(item)"
          >{{$i18n.locale == 'en' ? item.e_name : item.c_name}}</div>
        </div>
        <div class="tip">Not allowed to chage after mint.</div>
      </template>

      <div class="label">Language</div>
      <div class="category-container">
        <div
          class="item"
          :class="{
					light:form.language && form.language.includes(item.english)
				}"
          v-for="(item, index) in languageList"
          :key="index"
          @click="choseLanguage(item)"
        >{{$i18n.locale == 'en' ? item.english : item.chinese}}</div>
      </div>
      <div class="tip">Not allowed to chage after mint.</div>
      <div class="label">NFT Max Supply</div>
      <div class="input-container">
        <el-input v-model="form.maxSupply" class="input"></el-input>
      </div>
      <div class="tip" v-if="form.maxSupply">
        NFT Maximum Available Supply Quantity
        <span class="text-color">{{ form.maxSupply }}</span>
      </div>
      <div class="label">NFT Initial Mint Quantity</div>
      <div class="input-container">
        <el-input v-model="form.initialQuantity" class="input"></el-input>
      </div>
      <div class="tip">
        Not allowed to chage after mint.NFT Maximum Initial Mint Quantity
        <span class="text-color">250</span>
      </div>
      <div class="label">NFT Initial Mint Price</div>
      <div class="input-container">
        <el-input v-model="form.initialPrice" class="input"></el-input>
        <div class="unit">MBD</div>
      </div>
      <div class="tip">Allowed to chage after mint.Price set to 0,anyone can mint for free,access protected content.</div>
      <div class="btn-container">
        <el-button class="common-btn2" @click="backClick()">Back</el-button>
        <el-button class="common-btn2" @click="saveClick()">Save</el-button>
        <el-button class="common-btn2" @click="nextClick()">Next</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getNftCategoriesByType,
  getNftLanguage,
  getNftPlatformsByType,
  getNftTypes,
} from '@/utils/http'
export default {
  name: 'create-step1',
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
  data() {
    return {
      typeList: [],
      categoryList: [],
      platformList: [],
      languageList: [],
      form: {
        contentType: undefined,
        category: [],
        prompt: [],
        language: [],
        maxSupply: undefined,
        initialQuantity: undefined,
        initialPrice: undefined,
      },
    }
  },
  methods: {
    /** 选择大类 */
    choseType(e_name) {
      this.form.contentType = e_name
      this.loadCategoryList()
      this.loadPlatformList()
    },
    /** 选择分类 */
    choseCategory(val) {
      const ifExist = this.form.category.includes(val.e_name)
      if (!ifExist) {
        this.form.category.push(val.e_name)
      } else {
        this.form.category = this.form.category.filter(
          (item) => item !== val.e_name
        )
      }
    },
    /** 选择平台 */
    chosePlatform(val) {
      const ifExist = this.form.prompt.includes(val.e_name)
      if (!ifExist) {
        this.form.prompt.push(val.e_name)
      } else {
        this.form.prompt = this.form.prompt.filter(
          (item) => item !== val.e_name
        )
      }
    },
    /** 选择语言 */
    choseLanguage(val) {
      const ifExist = this.form.language.includes(val.english)
      if (!ifExist) {
        this.form.language.push(val.english)
      } else {
        this.form.language = this.form.language.filter(
          (item) => item !== val.english
        )
      }
    },
    /** 获取大类 */
    loadTypeList() {
      getNftTypes().then((r) => {
        const arr = r.data.list
        if (arr) {
          this.typeList = this._.chunk(arr, 3)
        }
      })
    },
    /** 获取分类 */
    loadCategoryList() {
      if (this.form.contentType) {
        getNftCategoriesByType(this.form.contentType).then((r) => {
          this.categoryList = r.data.list
        })
      }
    },
    /** 获取Language */
    loadLanguageList() {
      getNftLanguage().then((r) => {
        this.languageList = r.data.list
      })
    },
    /** 获取平台 */
    loadPlatformList() {
      getNftPlatformsByType(this.form.contentType).then((r) => {
        this.platformList = r.data.list
      })
    },
    backClick() {
      this.$emit('backClick')
    },
    saveClick() {
      if (!this.form.step) {
        this.form.step = 1
      }
      this.$emit('saveClick', this.form)
      this.$toast.success(this.$t('common.save_success'))
    },
    nextClick() {
      this.$emit('saveClick', this.form)
      this.$emit('nextClick')
    },
  },
  mounted() {
    this.loadTypeList()
    if (this.metadata) {
      this.form = this.metadata
    }
    this.choseType(this.metadata.contentType)
    this.loadLanguageList()
  },
}
</script>

<style lang="scss" scoped>
.create-step1 {
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
    padding: 15px 0 55px 97px;

    .label {
      text-align: left;
      margin-top: 40px;
      font-size: 13px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #9faec0;
      margin-bottom: 12px;
    }

    .type-container {
      display: flex;
      flex-direction: row;

      .item {
        width: 210px;
        height: 49px;
        background: #0e161d;
        border: 1px solid #313838;
        border-radius: 6px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-right: 14px;

        font-size: 13px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #88a2b8;
        cursor: pointer;

        img {
          margin-right: 6px;
        }

        &.light {
          background: #18252f;
          border: 1px solid #2fc9bd;

          font-family: Arial;
          color: #00f9e5;
        }
      }
    }

    .category-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .item {
        width: 131px;
        height: 27px;
        line-height: 27px;
        background: #0e161d;
        border: 1px solid #313838;
        border-radius: 4px;
        margin: 0 9px 10px 0;

        font-size: 10px;
        font-family: Arial;
        font-weight: bold;

        &.light {
          background: #18252f;
          border: 1px solid #2fc9bd;

          font-family: Arial;
          color: #00f9e5;
        }
      }
    }

    .tip {
      margin-top: 13px;
      font-size: 9px;
      font-family: Arial;
      font-weight: 400;
      color: #707d8c;
      text-align: left;
    }

    .input-container {
      display: flex;
      align-items: center;

      .input {
        width: 271px;
        font-size: 10px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
        line-height: 25px;

        &:focus {
          background: #0e161d;
          border: 1px solid #00f9e5;
          border-radius: 6px;
        }
      }

      .unit {
        font-size: 13px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #00f9e5;
        margin-left: 5px;
      }
    }

    .btn-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 73px;
      padding-right: 98px;
      .common-btn2 {
        margin-right: 59px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
