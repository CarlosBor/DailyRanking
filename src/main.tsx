import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"

import { enableMocks } from './env';
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
      <Provider>
        <App />
      </Provider>
    </StrictMode>,
  )
})


