import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { initRouter } from './router/router.tsx';
import './assets/reset.css';
import { ApolloProvider } from "@apollo/client";
import { client } from "@/api/steam-server";

const init = async () => {
  await initRouter();
};

init().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
  );
});

