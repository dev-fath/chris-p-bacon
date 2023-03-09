// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { category } from '@prisma/client';
import { findCategories } from '@orm/category';

export default async function handler(req: NextApiRequest, res: NextApiResponse<category[]>) {
  // const result = await createCategory({ category_group: 'B', category_name: 'bbb', is_use: true });
  const result = await findCategories();
  console.log(result);
  res.status(200).json(result);
}
