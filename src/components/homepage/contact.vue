<template>
  <div class="container">
    <div class="columns is-gapless">

      <div class="sub-contact">
        <div class="gradient-header"></div>
        <div class="color-header"></div>
        <div class="sub-contact-header-content content">
          <b>Product designer for hire</b>
          <p>Available October 2018</p>
        </div>
        <div class="sub-contact-footer-content">
          <i class="icon-linkedin full-opacity"></i>
        </div>
      </div>
      <div class="contact">
        <p class="contact-time-stamp"><strong>Today</strong> {{ time }}</p>

        <div class="message-wrapper">
          <div class="message-content">
            Hello!
          </div>
          <div class="message-author">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/256x256.png">
            </figure>
            <div class="message-unread"></div>
          </div>
        </div>

        <div class="form-wrapper">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>

          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text" placeholder="Text input" value="bulma">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
            <p class="help is-success">This username is available</p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>

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
      time: 5
    }
  },
}
</script>

<style scoped lang="sass">





  .sub-contact, .sub-contact-header-content, .sub-contact-footer-content
    position: relative

  .contact
    background: rgba(255, 255, 255, 0.5)

</style>
