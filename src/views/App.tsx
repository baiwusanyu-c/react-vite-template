import { getHomeData } from '../api/api-home'
import { HelloWord } from '../components/HelloWord'
// TODO: husky lint
// TODO: router
// TODO: redux
import '../assets/style/app.scss'
import { Home } from './home'

function App() {
  // test env
  console.log('当前环境：', import.meta.env.VITE_PROJECT_ENV)
  // test request
  getHomeData({ appKey: 'appKey' })
  return (
      <div id="app_index">
        <HelloWord msg="Be-CLI" />
          <Home/>
      </div>
  )
}

export default App
