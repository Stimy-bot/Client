import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from './App.tsx'
import './index.css'
// import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';
// import theme from './theme/index.ts';
import queryClient from "./config/queryClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  // </ChakraProvider>
);
