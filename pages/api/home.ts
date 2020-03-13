import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    console.log("here");
  res.status(200).json({ name: 'John Doe' })
}
