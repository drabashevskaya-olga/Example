import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LocaleProvider } from "./Ctx/Locale";
import { UserProvider } from "./Ctx/User";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
