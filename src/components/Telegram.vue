<template>
  <div class="hello">
    <div class="top-nav">
      <button class="btn">
        <icon class="icon icon--arrow-left" name="arrow-left" scale="1.1"></icon>
      </button>
      <button class="btn">
        <img src="../assets/bot--icon.jpeg" alt="" class="contact-logo">
      </button>
      <div class="title-group">
        <div class="title">Gl Assistant</div>
        <div class="subtitle">bot</div>
      </div>
      <button class="btn">
        <icon class="icon icon--ellipsis-v" name="ellipsis-v" scale="2"></icon>
      </button>
    </div>

    <div class="messages">
      <div class="date">November 15</div>

      <div :class="['msg', {'own-msg': msg.type === 'own', 'response-msg': msg.type === 'response'}]"
           v-for="msg in messages"
           @click="ADD_MESSAGE(msg)">
        <template v-for="line in msg.text.split('\n')">{{line}}<br></template>
        <div class="time">{{ msg.time }}</div>
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


    <div class="input-panel">
      <div class="input-action emoji-selector">
        <icon class="icon icon--smile" name="smile-o" scale="1.5"></icon>
      </div>
      <div class="input-element">
        <input placeholder="Message" type="text" :value="message"/>
      </div>
      <div class="input-action attacher">
        <icon class="icon icon--paperclip" name="paperclip" scale="1.5"></icon>
      </div>
      <div class="input-action attacher--camera">
        <icon class="icon icon--camera" name="camera" scale="1.5"></icon>
      </div>
    </div>

  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
  import 'vue-awesome/icons/arrow-left'
  import 'vue-awesome/icons/ellipsis-v'
  import 'vue-awesome/icons/smile-o'
  import 'vue-awesome/icons/paperclip'
  import 'vue-awesome/icons/camera'
  import { mapState } from 'vuex'

  export default {
    name: 'telegram',
    components: {
      Icon,
    },
    computed: {
      ...mapState(['messages', 'message']),
    },
    methods: {
      // ...mapMutations(['ADD_MESSAGE'])
      ADD_MESSAGE (message) {
        this.$store.commit('ADD_MESSAGE', message)
      },
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello {
    position: relative;
    display: flex;
    flex-direction: column;
    /*min-height: 100vh;*/
  }

  .top-nav {
    background-color: #8299a5;
    display: flex;
    color: #fff;
    padding: 10px 0;
    .icon {
      color: #fff;
    }
    .icon--ellipsis-v {
      /*transform: scale(1.8, 1.4);*/
    }
    .contact-logo {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
    .btn {
      background-color: transparent;
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
    max-height: 430px;
    overflow-y: auto;

    .date {
      width: 100px;
      border-radius: 14px;
      background-color: #a0a0a0;
      color: white;
      padding: 4px 8px;
      margin: 2px auto;
    }

    .msg {
      pointer-events: all;
      cursor: pointer;
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

  .input-panel {
    display: inline-flex;
    flex-direction: row;
    padding: 10px;
    .icon {
      cursor: pointer;
    }
    .input-action {
      width: 30px;
    }
    .input-element {
      flex-grow: 1;
    }
    input {
      border: none;
      padding: 5px 10px;
      background-color: transparent;
    }
    input:focus {
      outline: none;
    }
  }

</style>
