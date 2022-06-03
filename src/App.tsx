import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/theme/theme";
import {QueryClient, QueryClientProvider} from "react-query"

function App() {
  const queryClient=new QueryClient({
    defaultOptions:{
      queries:{
        retry: false,
        refetchOnWindowFocus: true
      }
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient} >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
