import { useParams } from 'react-router-dom'
import { splitQueryParams } from '../utils'

const Articles = () => {
  const params = useParams()
  const queryParams = splitQueryParams(window.location.search)
  return (
    <div>
      <h1>Articles {params.id}</h1>
      <p>Query Params: {JSON.stringify(queryParams)}</p>
      <p>Query Params ID: {queryParams['id']}</p>
      <p>Query Params Query: {queryParams['query']}</p>
      <p>Es: /articles/1?id=1&query=test</p>
    </div>
  )
}

export default Articles