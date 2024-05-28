import React from 'react'
import { getData } from '@/fetch'
import SingleRoute from '@/components/singleRoute/SingleRoute'

const single = async ({params: {id}}) => {
  let data = await getData(`products/${id}`)
  return (
    <div>
      <SingleRoute data={data}/>
    </div>
  )
}

export default single