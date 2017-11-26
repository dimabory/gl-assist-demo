<template>
  <div class="hello">
    Conference #6
    <div class="occupation"></div>
    <div class="now"></div>
    <div class="scan"></div>
    <div class="free-slot"></div>
    <div class="hour" v-for="n in 10">
      <div class="label">
        10:00
      </div>
      <div class="slots">
        <div class="first-half">
          
        </div>
        <div class="second-half">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello {
    position: relative;
  }
  .hour {
    border: 1px solid #aaaaaa;
    // avoid borders doubling in a vertical hour list
    margin-top: -1px;
    display: flex;
    height: 60px;

    .label {
      flex-grow: 1;
      border-right: 1px solid #aaaaaa;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .slots {
      flex-grow: 9;
      display: flex;
      flex-direction: column;
      position: relative;

        .first-half {
          flex-grow: 1;
          border-bottom: 1px dotted #aaaaaa;
        }
        .second-half {
          flex-grow: 1;
        }
    }
  }

  .occupation {
    position: absolute;
    width: 100%;
    background-color: #f7d4d8;
    height: 300px;
    opacity: 0.5;
  }

  .free-slot {
    position: absolute;
    width: 100%;
    background-color: #9999ff;
    height: 100px;
    opacity: 0.5;
    top: 400px;
  }

  .now {
    position: absolute;
    width: 100%;
    height: 2px;
    top: 210px;
    background-color: #7777fa;
    opacity: 0.8;
  }

  .scan {
    position: absolute;
    width: 100%;
    height: 2px;
    top: 399px;
    background-color: #fa7777;
    opacity: 0.8;
  }
</style>
