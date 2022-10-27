import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { RouteComponent } from "./routes/RouteComponent"
import theme from "./theme/index";
import 'antd/dist/antd.min.css'
import "antd/dist/antd.css"
import { RecoilRoot } from "recoil"

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme} >
      <BrowserRouter>
        <RecoilRoot>
          <RouteComponent />
        </RecoilRoot>
      </BrowserRouter>
    </ChakraProvider>

  </React.StrictMode>,
  document.getElementById("root"),
)
