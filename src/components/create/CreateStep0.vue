<template>
  <div class="create-step0">
    <div class="create-label">Create</div>
    <div class="create-title">Create Your Conent DOUJI NFT Collection</div>
    <div class="type-container" v-for="(arr, index) in typeList" :key="index">
      <div class="type-item" v-for="(item, i) in arr" :key="i" @click="itemClick(item.e_name)">
        <!-- <img style="width: 72px;height: 67px;" src="@/assets/images/create/article.png" /> -->
        <div :class="showClass(i)">{{$i18n.locale == 'en' ? item.e_name : item.c_name}}</div>
      </div>
    </div>
    <div class="tip">The rest will be available soon</div>
    <div class="question">How to Create？</div>
  </div>
</template>

<script>
import { getNftTypes } from '@/utils/http'
export default {
  name: 'create-step0',
  data() {
    return {
      typeList: [],
    }
  },
  methods: {
    /** 获取分类 */
    loadTypeList() {
      getNftTypes().then((r) => {
        const arr = r.data.list
        if (arr) {
          this.typeList = this._.chunk(arr, 3)
        }
      })
    },
    showClass(i) {
      const r = i % 3
      switch (r) {
        case 0:
          return 'article'
        case 1:
          return 'prompt'
        case 2:
          return 'art'
        default:
          return 'article'
      }
    },
    itemClick(type) {
      this.$emit('itemClick', type)
    },
  },
  mounted() {
    this.loadTypeList()
  },
}
</script>

<style lang="scss" scoped>
.create-step0 {
  .create-label {
    font-size: 14px;
    font-family: Arial;
    font-weight: bold;
    color: #00f9e5;
    margin-top: 47px;
  }

  .create-title {
    margin-top: 19px;
    font-size: 26px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
  }

  .type-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 68px;

    .type-item {
      width: 320px;
      height: 140px;
      background: #1a2027;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #1a2027;
      border: 1px solid #2c3638;
    }

    .article {
      margin-top: 25px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      background: linear-gradient(-73deg, #00abf1 0%, #01eeff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .prompt {
      margin-top: 24px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      background: linear-gradient(-73deg, #3874fc 0%, #8a8dff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .art {
      margin-top: 22px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      background: linear-gradient(-73deg, #00d487 0%, #00dafd 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .tip {
    font-size: 8px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #99b5c4;
    margin-top: 40px;
  }

  .question {
    font-size: 9px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
    margin: 15px;
  }
}
</style>
