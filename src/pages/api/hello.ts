// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { createCategory } from '@orm/category';

type DataType = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<DataType>) {
  const result = await createCategory({ category_group: 'B', category_name: 'bbb', is_use: true });
  console.log(result);
  res.status(200).json({ name: 'John Doe' });
}
