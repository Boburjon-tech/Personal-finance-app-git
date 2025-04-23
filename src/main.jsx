import { createRoot } from 'react-dom/client'
import "./index.scss" 
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './apps/store.js'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
<Provider store={store}>
   <App /> 
   <Toaster />
</Provider>
)
