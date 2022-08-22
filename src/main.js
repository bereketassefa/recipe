import { createApp, provide, h } from "vue";
import App from "./App.vue";
import "./index.css";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import router from "./routes";
// import { createApolloProvider } from '@vue/apollo-option'

const cache = new InMemoryCache();

// function getHeaders() {
//   const headers = {};
//   const token = localStorage.getItem("apollo-token");
//   if (token) {
//     // headers["Authorization"] = `Bearer ${token}`;
//     console.log("token found")
//     headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiQm9zcyIsInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6IjAwNTY5YjgxLWM3OGQtNGIwOC1iYmUxLTRjMjBjMzhjMDM0NCJ9fQ.4R_rx34Wc-kOFs3uaCH0aOkBhLpqFADrgSPBBVVrTcw`;
//   } else {

//     headers["x-hasura-admin-secret"] = "supersecretword";
//   }
//   return headers;
// }
function gethead() {
  const headers = {}
  const token = window.localStorage.getItem("apollo-token");
  // if (token) {
  //   headers["Authorization"] = `Bearer ${ token }`
  // }else{
  //   headers["x-hasura-role"] = "anon";
  //   // headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiQm9zcyIsInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6IjAwNTY5YjgxLWM3OGQtNGIwOC1iYmUxLTRjMjBjMzhjMDM0NCJ9fQ.4R_rx34Wc-kOFs3uaCH0aOkBhLpqFADrgSPBBVVrTcw`
  // }
  headers["x-hasura-admin-secret"] = "Pdd97iISfB2rVlq2z0Afz2bgkF73VsCfPxU4wHigy4BtAgLEhMlheD4Jt5VjB42r"
  return headers

}

const apolloClient = new ApolloClient({
  cache,
  uri: "https://sweet-hagfish-78.hasura.app/v1/graphql",
  // uri: 'https://rickandmortyapi.com/graphql',

  // headers: getHeaders(),
  headers: gethead()
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});
// const apolloProvider = createApolloProvider({
//       defaultClient: apolloClient,
//     })
app.use(router);

app.mount("#app");

// createApp(App).mount('#app')
