<template>
  <div class="hello">
    <div class="occupation" :style="blockStyle" v-for="blockStyle of occupationBlocks"></div>
    <div class="now" :style="{top: nowTop}"></div>
    <div class="scan"></div>
    <div class="free-slot"></div>
    <div class="hour" v-for="n in 18">
      <div class="label">
        {{ n+6 | two-decimal }}:00
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
function timeToMinutes(time) {
  const [h, m] = time.split(/:/).map(_ => parseInt(_, 10));
  return 60 * h + m;
}
function timeToPxOffset(time) {
  const minutes = timeToMinutes(time);
  const dayStartMinutes = 7 * 60;
  const pxPerMinute = 61 / 60;
  return pxPerMinute * (minutes - dayStartMinutes); const occupationStartMinutes = timeToMinutes(matches[1]);
  const occupationEndMinutes = timeToMinutes(matches[2]);
}
function computeOccupationBorders(occupation) {
  const matches = occupation.match(/(\d{2}:\d{2}) - (\d{2}:\d{2})/);
  const blockStart = timeToPxOffset(matches[1]);// pxPerMinute * (occupationStartMinutes - dayStartMinutes);
  const blockHeight = timeToPxOffset(matches[2]) - blockStart;// pxPerMinute * (occupationEndMinutes - occupationStartMinutes);
  return { top: `${blockStart}px`, height: `${blockHeight}px` };
}
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      occupations: [
        '07:30 - 08:45',
        '17:00 - 18:30',
        '11:00 - 12:00',
      ],
      now: '10:45',
    };
  },
  computed: {
    occupationBlocks() {
      return this.occupations.map(computeOccupationBorders);
    },
    nowTop() {
      return `${timeToPxOffset(this.now)}px`;
    },
  },
  created() {
    // console.log(this.occupationBlocks);
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
