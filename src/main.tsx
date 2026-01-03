import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { enableMocks } from './env'
import App from './App.tsx'

const prepareMocks = async () => {
  if (enableMocks) {
    const { worker } = await import('./mocks/browser.ts');
    await worker.start({
      onUnhandledRequest: "bypass"
    });
  }
}

prepareMocks().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  )
})


