import { Search, ArrowRightBold } from '@element-plus/icons-vue'

const icons = {
  Search,
  ArrowRightBold
}

export default (app) => {
  installIcon(app)
}

function installIcon(app) {
  for(let key in icons) {
    app.component(key, icons[key])
  }
}
