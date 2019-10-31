import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const EXAMPLE_QUERY = gql`
  query EXAMPLE_QUERY {
    exampleQuery
  }
`

export default function ApolloTestPage() {
  const { data, loading, error } = useQuery(EXAMPLE_QUERY)

  return (
    <>
      <h1>
        {loading && 'Loading...'}
        {!loading && data.exampleQuery}
        {error && 'Some error occured. Check out the console.'}
      </h1>
    </>
  )
}
