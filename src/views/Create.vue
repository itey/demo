<template>
  <div class="create-container">
    <div class="step-container" v-if="step>0">
      <div class="step" :class="{
				'step':step<1,
				'step-light':step>=1
			}">
        <div class="step-title">Step1</div>
        <div class="step-sub">Set NFT Mint infomation</div>
      </div>
      <div style="margin: 0 31px 0 36px;">
        <img style="width: 39px;height: 6px" :src="require(`@/assets/images/create/arrow${step>=1?'-light':''}.png`)" />
      </div>
      <div class="step" :class="{
				'step':step<2,
				'step-light':step>=2
			}">
        <div class="step-title">Step2</div>
        <div class="step-sub">Write Content</div>
      </div>
      <div style="margin: 0 31px 0 36px;">
        <img style="width: 39px;height: 6px" :src="require(`@/assets/images/create/arrow${step>=2?'-light':''}.png`)" />
      </div>
      <div class="step" :class="{
				'step':step<3,
				'step-light':step>=3
			}">
        <div class="step-title">Step3</div>
        <div class="step-sub">Mint NFT</div>
      </div>
    </div>
    <create-step0 v-if="step==0" @itemClick="itemClick"></create-step0>
    <create-step1 v-if="step==1" :metadata="metadata" @saveClick="saveData" @backClick="backClick1" @nextClick="nextClick1"></create-step1>
    <create-step2 v-if="step==2" :metadata="metadata" @saveClick="saveData" @backClick="backClick2" @nextClick="nextClick2"></create-step2>
    <create-step3 v-if="step==3"></create-step3>
  </div>
</template>

<script>
import CreateStep0 from '@/components/create/CreateStep0'
import CreateStep1 from '@/components/create/CreateStep1'
import CreateStep2 from '@/components/create/CreateStep2'
import CreateStep3 from '@/components/create/CreateStep3'
import cache from '@/utils/cache'
export default {
  name: 'create-view',
  components: {
    CreateStep0,
    CreateStep1,
    CreateStep2,
    CreateStep3,
  },
  data() {
    return {
      contractJson: {
        initialPrice: undefined,
      },
      metadata: {
        contentType: undefined,
      },
      step: 0,
    }
  },
  created() {
    this.loadCache()
  },
  methods: {
    loadCache() {
      const cacheData = cache.local.getJSON('NFT_MINT_CACHE')
      if (cacheData) {
        this.metadata = cacheData
        this.step = cacheData.step
        console.log(cacheData)
      }
    },

    saveData(form) {
      this.metadata = form
      cache.local.setJSON('NFT_MINT_CACHE', this.metadata)
    },

    itemClick(contentType) {
      this.metadata.contentType = contentType
      this.step = 1
    },
    backClick1() {
      this.step = 0
    },
    nextClick1() {
      this.step = 2
    },
    backClick2() {
      this.step = 1
    },
    nextClick2() {
      this.step = 3
    },
  },
}
</script>
<style lang="scss" scoped>
.create-container {
  display: flex;
  flex-direction: column;

  .step-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 62px;

    .step {
      text-align: left;

      .step-title {
        font-size: 19px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #747c7c;
      }

      .step-sub {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #747c7c;
        margin-top: 10px;
      }
    }

    .step-light {
      .step-title {
        font-size: 19px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #4cc9ce;
        background: linear-gradient(-16deg, #4195f6 0%, #00f9e5 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .step-sub {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #50ced5;
      }
    }
  }
}
</style>
