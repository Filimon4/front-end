import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './app/App'

import '@shared/fonts/NotoSansNagMundari-Bold.ttf'
import '@shared/fonts/NotoSansNagMundari-Medium.ttf'
import '@shared/fonts/NotoSansNagMundari-Regular.ttf'
import '@shared/fonts/NotoSansNagMundari-SemiBold.ttf'

import { Provider } from "react-redux";
import { setupStore } from '@shared/lib/store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
)
