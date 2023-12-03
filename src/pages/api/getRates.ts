import {client} from '../../../sanity'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Rates } from '../../../typings'
import { groq } from 'next-sanity'


const query = groq`
*[_type == "rates"]
`

type Data = {
  rates: Rates[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const rates: Rates[] = await client.fetch(query);
  res.status(200).json({ rates })
  console.log(rates)
}
