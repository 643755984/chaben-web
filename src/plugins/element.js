import { Search, CircleClose } from '@element-plus/icons-vue'

const icons = {
  CircleClose,
  Search,
}

export default (app) => {
  installIcon(app)
}

function installIcon(app) {
  for(let key in icons) {
    app.component(key, icons[key])
  }
}
