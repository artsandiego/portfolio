import { useEffect } from 'react';
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

/* Apollo Client for GraphQL */
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

/* Style */
import '../styles/scss/app.scss'
import '../styles/tailwind/tailwind.css'

/* Apollo Client */
const API = process.env.API_URL
const client = new ApolloClient({
  uri: 'https://strapi-artsandiego.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    /* Google tag integration */
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  
  }, [router.events])

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App