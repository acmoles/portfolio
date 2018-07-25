<template>
  <div class="container">
    <div class="contact-wrapper columns is-gapless">

      <div class="sub-contact column">

        <div class="sub-contact-header-content content">
          <h3>Contact</h3>
        </div>


        <div class="form-wrapper">

          <div class="field">
            <div class="control has-icons-right">
              <input
                :class="{ 'is-danger': errors.has('name') }"
                class="input"
                v-validate="'required'"
                v-model="name"
                type="text"
                name="name"
                placeholder="Name"
              >
              <span
                v-show="errors.has('name')"
                class="icon is-small is-right"
              >
                <i class="icon-attention-circled"></i>
              </span>
            </div>
            <p
              v-show="errors.has('name')"
              class="help is-danger"
            >
              What should I call you?
            </p>
          </div>

          <div class="field">
            <div class="control has-icons-right">
              <input
                :class="{ 'is-danger': errors.has('email') }"
                class="input"
                v-validate="'required|email'"
                v-model="email"
                type="email"
                name="email"
                placeholder="Email"
              >
              <span
                v-show="errors.has('email')"
                class="icon is-small is-right"
              >
                <i class="icon-attention-circled"></i>
              </span>
            </div>
            <p
              v-show="errors.has('email')"
              class="help is-danger"
            >
              Your email doesn't look right
            </p>
          </div>

          <div class="field">
            <div class="control">
              <textarea
                :class="{ 'is-danger': errors.has('message') }"
                class="textarea contact-message"
                v-validate="'required'"
                v-model="message"
                name="message"
                placeholder="Message"
              >
              </textarea>
            </div>
            <p
              v-show="errors.has('message')"
              class="help is-danger"
            >
              Let's start a conversation
            </p>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                <span>Send me a CV / Resume</span>
              </label>
            </div>
          </div>

          <div class="field cta">
            <div class="control">
              <button @click="submit" class="button is-rounded is-link">
                <span class="icon is-small">
                  <i class="icon-paper-plane full-opacity"></i>
                </span>
              </button>
            </div>
            <div v-show="invalidMessage" class="invalid-message">
              Please check you've entered your details correctly
            </div>
          </div>

        </div>

      </div>



      <div class="contact column">
        <p class="contact-time-stamp"><strong>Today</strong> {{ time }}</p>

        <div class="message-area">

          <article class="media">
            <div class="media-content">
              <div class="media-ghost">
                <div class="media-arrow"></div>
              </div>
              <div class="content">
                <p>
                  Hi there! 👋
                </p>
                <p>
                  Feel free to get in touch regarding permanent and contract positions.
                </p>
              </div>
            </div>
            <div class="media-right">
              <figure class="message-image image is-64x64">
                <img src="https://bulma.io/images/placeholders/256x256.png">
              </figure>
              <div class="message-unread"></div>
            </div>
          </article>

        </div>

      </div>
    </div>
  </div>
</template>

<script>

import * as axios from 'axios'

export default {
  name: 'Contact',
  props: {
    prop: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      time: '00:00',
      name: '',
      email: '',
      message: '',
      invalidMessage: false
    }
  },
  created () {
    this.time = new Date().toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric'});
  },
  methods: {
    submit () {
      this.$validator.validateAll().then((result) => {
        if (result) {

          this.invalidMessage = false;

          axios({
            method: 'post',
            url: 'https://us-central1-portfolio-210717.cloudfunctions.net/sendgridEmail',
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Content-Type' : 'application/json'
            },
            data: {
              name: this.name,
              email: this.email,
              message: this.message
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          return;
        }

        this.invalidMessage = true;

      });
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../../sass/variables'

  .contact-wrapper

  .sub-contact, .sub-contact-header-content, .sub-contact-footer-content
    position: relative

  .sub-contact.column
    background: rgba($white, 0.85)
    width: 100%
    @media screen and (min-width: $tablet)
      width: calc(33.3333% - 1em)

  .sub-contact-header-content
    padding: 1em
    h3
      margin: 0

  .sub-contact
    border-radius: $radius-large $radius-large 0 0
    @media screen and (min-width: $tablet)
      border-radius: $radius-large 0 0 $radius-large

  .contact
    border-radius: 0 0 $radius-large $radius-large
    background: rgba($white, 0.5)
    @media screen and (min-width: $tablet)
      border-radius: 0 $radius-large $radius-large 0

  .contact-time-stamp
    text-align: center
    padding: 1em
    font-size: 0.75em
    opacity: 0.5

  .message-area
    padding: 1em

  .media
    margin-bottom: 1em

  .media-content
    position: relative
    min-height: 64px

  .media-ghost, .media-content
    padding: 0.75em

  .media-ghost
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: $white
    border-radius: $radius
    opacity: 0.85
    .media-arrow
      position: absolute
      right: -5px
      border-radius: $radius
      top: 15px
      width: 30px
      height: 30px
      background: $white
      transform: rotate(45deg)

  .message-image
    border-radius: $radius-rounded
    overflow: hidden




  .form-wrapper
    padding: 1em

  // input
  //   @media screen and (min-width: $tablet)
  //     max-width: 50%

  .is-link
    .icon
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-23%, -50%)

  .cta
    margin-top: 1.5em

</style>
