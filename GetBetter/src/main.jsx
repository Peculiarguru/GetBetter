import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={{
          fontFamily: "Greycliff CF, sans-serif",
          components: {
            Title: {
              styles: {
                root: { fontWeight: 400 },
              },
            },
            Text: {
              styles: {
                root: { fontWeight: 100, fontSize: 17 },
              },
            },
          },
        }}
      >
        <Notifications position="top-right" zIndex={2077} />
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
