<template>
  <div class="hello">
    <div class="occupation" :style="blockStyle" v-for="blockStyle of occupationBlocks"></div>
    <div class="now" :style="{top: nowTop}"></div>
    <div class="scan"
         :style="{top: 0}"
         ref="$scanLine">
    </div>
    <div class="free-slot"
         v-for="(style, i) of free"
         :style="{
            top: `${style.top}px`,
            height: style.bottom ? `${style.bottom - style.top}px` : `calc(100% - ${style.top}px)`}"
         :key="i"
         ref="$freeSlot">
    </div>
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
  function timeToMinutes (time) {
    const [h, m] = time.split(/:/).map(_ => parseInt(_, 10))
    return 60 * h + m
  }

  function timeToPxOffset (time) {
    const minutes = timeToMinutes(time)
    const dayStartMinutes = 7 * 60
    const pxPerMinute = 61 / 60
    return pxPerMinute * (minutes - dayStartMinutes)
    // const occupationStartMinutes = timeToMinutes(matches[1]);
    // const occupationEndMinutes = timeToMinutes(matches[2]);
  }

  function computeOccupationBorders (occupation) {
    const matches = occupation.match(/(\d{2}:\d{2}) - (\d{2}:\d{2})/)
    const blockStart = timeToPxOffset(matches[1])// pxPerMinute * (occupationStartMinutes - dayStartMinutes);
    const blockHeight = timeToPxOffset(matches[2]) - blockStart// pxPerMinute * (occupationEndMinutes - occupationStartMinutes);
    return {top: `${blockStart}px`, height: `${blockHeight}px`}
  }

  export default {
    name: 'agenda',
    props: {
      occupations: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        now: new Date(),
      }
    },
    computed: {
      occupationBlocks () {
        return this.occupations.map(computeOccupationBorders)
      },
      occupied () {
        return this.occupationBlocks.map((i) => {
          const top = parseFloat(i.top)
          return {
            top: top,
            bottom: top + parseFloat(i.height)
          }
        }).sort((a, b) => a.top > b.top)
      },
      free () {
        const firstlyOccupied = this.occupied[0]

        let start = 0
        if (firstlyOccupied.top === start) {
          start += firstlyOccupied.bottom + 1
        }

        return [...this.occupied.reduce((prev, curr, i, arr) => {
          const free = {
            top: start,
            bottom: curr.top
          }

          start = curr.bottom
          return [...prev, free]
        }, []), {
          top: this.occupied.slice(-1).pop().bottom,
        }]
      },
      nowTop () {
        return `${timeToPxOffset(this.now.getHours() + ':' + this.now.getUTCMinutes())}px`
      },
      agendaHeight () {
        return this.$el.offsetHeight
      }
    },
    methods: {
      scan (fromTime, toTime) {
        const scanLine = this.$refs.$scanLine
        const freeSlots = this.$refs.$freeSlot

        const interval = setInterval(() => {
          let top = scanLine.offsetTop
          if (top >= this.agendaHeight) {
            console.log('End of scanning')
            return clearInterval(interval)
          }

          scanLine.style.top = `${++top}px`

          freeSlots.map((i) => {
            if (top >= i.offsetTop + i.offsetHeight) {
              i.classList.add('free-slot--scanned')
            }
          })
        }, Math.floor(Math.random() * (10 - 1) + 1))
      },
    },
    created () {
      // console.log(this.occupationBlocks);
    },
    mounted () {
      this.scan()
    },
  }
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
    /*height: 100px;*/
    opacity: 0.5;
    /*top: 400px;*/
  }

  .free-slot--scanned {
    background-color: #9999ff;
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
    background-color: #fa7777;
    opacity: 0.8;
  }
</style>
