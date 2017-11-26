<template>
  <div class="hello">
    <div class="top-nav">
      <button class="btn-left">
        <img src="../assets/icon.png" alt="">
      </button>
      <img src="../assets/icon.png" alt="" class="contact-logo">
      <div class="title-group">
        <div class="title">Gl Assistant</div>
        <div class="subtitle">bot</div>
      </div>
      <button class="btn-right">
        <img src="../assets/icon.png" alt="">
      </button>
    </div>

    <div class="messages">
      <div class="date">November 15</div>

      <div :class="{'own-msg': message.type == 'own', 'response-msg': message.type == 'response'}"
           v-for="message in messages"
           @click="ADD_MESSAGE(message)">
           <template v-for="line in message.text.split('\n')">{{line}}<br></template>
        <div class="time">{{ message.time }}</div>
      </div>
      <!-- <div class="own-msg">
        Book
        <div class="time">22:51</div>
      </div>
      <div class="response-msg">
        Booked #6 17:00 - 17:30
        <div class="time">22:51</div>
      </div>
      <div class="response-msg">
        Booked #6 17:00 - 17:30
        <div class="time">22:51</div>
      </div>
      <div class="own-msg">
        Book asdfasd fas fasf asf asdf asfsdfasd fas fasf asf asdf asfsdfasd fas fasf asf asdf asfsdfasd fas fasf asf asdf asf
        <div class="time">22:51</div>
      </div>
      <div class="response-msg">
        Booked #6 17:00 - 17:30 asd fasd fasdf asdf asd fasdf asdf asdf asdf asd fasd fasdf asd fasd fasdf asdf
        <div class="time">22:51</div>
      </div> -->
    </div>
    

    <div class="input-pannel">
      <img src="" alt="">
      <input type="text"/>
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
    </div>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'HelloWorld',
  computed: {
    ...mapState(['messages']),
  },
  methods: {
    // ...mapMutations(['ADD_MESSAGE'])
    ADD_MESSAGE(message) {
      this.$store.commit('ADD_MESSAGE', message);
    }
  },
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
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .top-nav {
    background-color: #8299a5;
    display: flex;
    color: #fff;

    .btn-left,
    .btn-right {
      width: 60px;
      background-color: #8299a5;
      border: none;
    }
    .title-group {
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      .title {
        flex-grow: 3;
        display: flex;
        align-items: flex-end;
        font-weight: bold;
      }
      .subtitle {
        flex-grow: 1;
        display: flex;
        align-items: flex-start;
      }
    }
  }

  .messages {
    background-image: url("../assets/tele-background.jpg");
    flex-grow: 1;
    padding: 0 10px;
    border-top: 1px solid #aaaaaa;
    border-bottom: 1px solid #aaaaaa;

    .date {
      width: 100px;
      border-radius: 14px;
      background-color: #a0a0a0;
      color: white;
      padding: 4px 8px;
      margin: 2px auto;
    }

    .own-msg {
      float: right;
      clear: both;
      display: flex;
      justify-content: flex-end;
      border-radius: 10px;
      background-color: #d0fdc9;
      padding: 8px 12px;
      margin: 4px 0;
      font-size: 18px;

      .time {
        color: #35a513;
        font-size: 14px;
        padding: 2px 10px;
        margin-top: 6px;
      }
    }

    .response-msg {
      float: left;
      clear: both;
      display: flex;
      justify-content: flex-end;
      border-radius: 10px;
      background-color: #fff;
      padding: 8px 12px;
      margin: 4px 0;
      font-size: 18px;

      .time {
        color: #989898;
        font-size: 14px;
        padding: 2px 10px;
        margin-top: 6px;
      }
    }
  }

  .input-pannel {
    height: 46px;

    input {
      height: 100%;
      border: none;
      font-size: 24px;
    }
  }

</style>
