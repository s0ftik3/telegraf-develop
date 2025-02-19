const Markup = require('./markup')

class Extra {
  constructor (opts) {
    this.load(opts)
  }

  load (opts = {}) {
    return Object.assign(this, opts)
  }

  inReplyTo (messageId) {
    this.reply_to_message_id = messageId
    return this
  }

  notifications (value = true) {
    this.disable_notification = !value
    return this
  }

  webPreview (value = true) {
    this.disable_web_page_preview = !value
    return this
  }

  protectContent (value = false) {
    this.protect_content = value
    return this
  }

  markup (markup) {
    if (typeof markup === 'function') {
      markup = markup(new Markup())
    }
    this.reply_markup = { ...markup }
    return this
  }

  HTML (value = true) {
    this.parse_mode = value ? 'HTML' : undefined
    return this
  }

  markdown (value = true) {
    this.parse_mode = value ? 'Markdown' : undefined
    return this
  }

  markdownV2 (value = true) {
    this.parse_mode = value ? 'MarkdownV2' : undefined
    return this
  }

  caption (caption = '') {
    this.caption = caption
    return this
  }

  static inReplyTo (messageId) {
    return new Extra().inReplyTo(messageId)
  }

  static notifications (value) {
    return new Extra().notifications(value)
  }

  static webPreview (value) {
    return new Extra().webPreview(value)
  }

  static protectContent (value) {
    return new Extra().protectContent(value)
  }

  static load (opts) {
    return new Extra(opts)
  }

  static markup (markup) {
    return new Extra().markup(markup)
  }

  static HTML (value) {
    return new Extra().HTML(value)
  }

  static markdown (value) {
    return new Extra().markdown(value)
  }

  static markdownV2 (value) {
    return new Extra().markdownV2(value)
  }

  static caption (caption) {
    return new Extra().caption(caption)
  }
}

Extra.Markup = Markup

module.exports = Extra
