import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
import Vuetify from "vuetify";

const options = { pretty: true }
const locals = { name: "My Pug" }

export default defineConfig({
  plugins: [pugPlugin(options, locals), Vuetify()],
})