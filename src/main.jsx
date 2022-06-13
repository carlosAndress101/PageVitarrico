import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {
ApolloClient,
InMemoryCache,
ApolloProvider,
useQuery,
HttpLink,
gql,
} from "@apollo/client";

const client = new ApolloClient({
cache: new InMemoryCache(),
link: new HttpLink({
  uri:`https://vitarrico-back-end.herokuapp.com/graphql`,
}),
});

const query = gql`
query {
  customers {
    _id
    Name
    Lastname
    Age
    Phonenumber
    Email
    password
    city
  }
}
`;
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>

)
