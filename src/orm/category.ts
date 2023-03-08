import { category, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateCategoryDto extends Partial<category> {
  category_group: string;
  category_name: string;
  is_use: boolean;
}

export const createCategory = async (props: CreateCategoryDto) => {
  const { category_group, category_name, is_use } = props;

  const createResult: category = await prisma.category.create({
    data: {
      category_group,
      category_name,
      is_use,
    },
  });

  console.log(createResult);

  return createResult;
};
