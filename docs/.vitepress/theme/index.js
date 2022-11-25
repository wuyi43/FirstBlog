import DefaultTheme from 'vitepress/theme'
import Message from "../../../components/Message.vue"
import Happy from "../../../components/Happy.vue"
import Writing from "../../../components/Writing.vue"
import Sad from "../../../components/Sad.vue"
import Bitter from "../../../components/Bitter.vue"
import Spicy from "../../../components/Spicy.vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Message', Message);
    app.component('Happy', Happy);
    app.component('Writing', Writing);
    app.component('Sad', Sad);
    app.component('Bitter', Bitter);
    app.component('Spicy', Spicy);

  }
}

