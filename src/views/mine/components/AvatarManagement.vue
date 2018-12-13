<template>
  <div class="avatar-management">
    <div
      :style="{backgroundImage: `url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2577022489,1269768065&fm=27&gp=0.jpg)`}"
      class="user-avatar"
    ></div>
    <el-button :loading="isWaiting" type="primary" plain @click="handleClick">重新上传</el-button>
    <input ref="upAvator" type="file" class="inputfile" @change="handleUpAvator">
  </div>
</template>

<script>
import * as Static from '../static'

export default {
  data() {
    return {
      isWaiting: false
    }
  },
  computed: {
    avatar() {
      return this.$store.getters.avatar
    }
  },
  methods: {
    handleClick() {
      this.$refs.upAvator.click()
    },
    handleUpAvator(e) {
      const file = e.target.files[0]
      const arr = file.name.split('.')
      if (!(arr[arr.length - 1] in Static.imgsType)) {
        this.$message.warning('只能上传图片')
        return
      }

      const isLt1M = file.size / 1024 / 1024 > 1
      if (isLt1M) {
        this.$message.warning('上传的图片不能大于1MB')
        return
      }

      var data = new FormData()
      data.append('file', file)
      this.$store.commit('SET_AVATAR', window.URL.createObjectURL(file))

      this.$refs.upAvator.value = null // 避免多次提交同一文件出现无法提交的情况
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-management {
  width: 200px;
  margin: 60px auto;
  .inputfile {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
}
.user-avatar {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  margin-bottom: 40px;

  &::after {
    content: "";
    position: absolute;
    top: 10%;
    left: 0%;
    width: 100%;
    height: 100%;
    background: inherit;
    background-size: 100% 100%;
    border-radius: 50%;
    transform: scale(0.95);
    filter: blur(10px) brightness(80%) opacity(0.8);
    z-index: -1;
  }
}
</style>

