<template>
  <div class="scene">
    <div class="hello">
      <img src="../assets/nexus-frame.png" class="frame"/>
      <div class="screen">
        <Telegram></Telegram>
      </div>
    </div>
    <div class="agenda">
      <Agenda></Agenda>
    </div>
    <div class="agenda">
      <Agenda></Agenda>
    </div>
    <div class="agenda">
      <Agenda></Agenda>
    </div>
    <div class="agenda">
      <Agenda></Agenda>
    </div>
    <div class="agenda">
      <Agenda></Agenda>
    </div>
    <div class="agenda">
      <Agenda></Agenda>
    </div>
  </div>
</template>

<script>
import Telegram from '@/components/Telegram';
import Agenda from '@/components/Agenda';

export default {
  name: 'Scene',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    Telegram, Agenda,
  },
  methods: {
    addMessage(delay, message) {
      return new Promise(resolve => setTimeout(
        () => {
          this.$store.commit('ADD_MESSAGE', message);
          resolve();
        },
        delay,
      ));
    },
  },
  async created() {
    this.$store.commit('CLEAR_MESSAGES');
    await this.addMessage(1000, { type: 'own', text: 'Register', time: '22:51' });
    await this.addMessage(900, { type: 'response', text: 'What is your e-mail?', time: '22:51' });
    await this.addMessage(3000, { type: 'own', text: 'k.gerasimenko@gl.com', time: '22:51' });
    await this.addMessage(900, { type: 'response', text: 'Please enter registration code sent to your e-mail', time: '22:51' });
    await this.addMessage(3000, { type: 'own', text: '21737', time: '22:51' });
    await this.addMessage(900, { type: 'response', text: 'Registration completed. Type "Book" to book the conference.', time: '22:51' });
    await this.addMessage(3000, { type: 'response', text: 'DUMMY PAUSE', time: '22:51' });
    this.$store.commit('CLEAR_MESSAGES');

    await this.addMessage(1000, { type: 'own', text: 'Book', time: '12:51' });
    await this.addMessage(900, { type: 'response', text: 'Booked #6 for 13:00-13:30', time: '12:51' });
    await this.addMessage(3000, { type: 'response', text: 'DUMMY PAUSE', time: '22:51' });
    this.$store.commit('CLEAR_MESSAGES');

    await this.addMessage(1000, { type: 'own', text: 'Lurk', time: '12:51' });
    await this.addMessage(900, { type: 'response',
      text: `1). 13:00-13:30 #6 or #4
    2). 13:30-14:20 #2`,
      time: '12:51' });
    // await this.addMessage(3000, { type: 'response', text: 'DUMMY PAUSE', time: '22:51' });
    // this.$store.commit('CLEAR_MESSAGES');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .scene {
    display :flex;
  }
  .agenda {
    // padding-top: 40px;
    flex-grow: 0.7;
  }
  .hello {
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #e4e4e4;
  }
  
  .screen {
    left: 29px;
    top: 142px;
    width: 301px;
    height: 535px;
    position: relative;
    overflow: hidden;
  }

  .frame {
    position: absolute;
    width: 800px;
    left: -220px;
  }

</style>
