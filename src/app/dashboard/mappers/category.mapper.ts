import { Category } from 'src/app/models/category';

export class CategoryMapper {
  constructor() {}

  public map(data: any): any {
    return data.map((item: any) => {
      let categoryModel: Category = {} as Category;
      categoryModel.display_name = item.display_name;
      categoryModel.list_name = item.list_name;
      categoryModel.list_name_encoded = item.list_name_encoded;
      categoryModel.newest_published_date = item.newest_published_date;
      categoryModel.oldest_published_date = item.oldest_published_date;
      categoryModel.updated = item.updated;
      return categoryModel;
    });
  }
}
