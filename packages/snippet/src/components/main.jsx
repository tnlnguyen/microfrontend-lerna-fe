import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import theme from './theme'
import App from './RealTimeEditor'

const queryClient = new QueryClient()

export default Main = () => {
  return (
    ReactDOM.render(
      <React.StrictMode>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
              <RealTimeEditor />
          </QueryClientProvider>
        </ChakraProvider>
      </React.StrictMode>,
      document.getElementById('root')
    )
  )
}
