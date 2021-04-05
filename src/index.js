import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Auth0Provider } from "./authServices/auth0/auth0Service"
import config from "./authServices/auth0/auth0Config.json"
import { IntlProviderWrapper } from "./utility/context/Internationalization"
import { Layout } from "./utility/context/Layout"
import * as serviceWorker from "./serviceWorker"
import "./index.scss"
import "./@fake-db"
import { store } from "./redux"
import "./index.scss"
import "./@fake-db"
import { FallbackSpinner } from "./components"


const LazyApp = lazy(() => import("./App"))

ReactDOM.render(
  <Provider store={store}>
      <Suspense fallback={<FallbackSpinner />}>
        <Layout>
          <IntlProviderWrapper>
            <LazyApp />
          </IntlProviderWrapper>
        </Layout>
      </Suspense>
    </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
