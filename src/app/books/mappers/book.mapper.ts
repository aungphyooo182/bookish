import { Book } from 'src/app/models/book';
import { CategoryDetail } from 'src/app/models/category-detail';

export class BookMapper {
  constructor() {}

  public map(data: any): any {
    return data.map((item: any) => {
      let categoryModel: CategoryDetail = {} as CategoryDetail;
      let bookModel: Book = {} as Book;

      categoryModel.bestsellers_date = item.bestsellers_date;
      categoryModel.corrections = item.corrections;
      categoryModel.display_name = item.display_name;
      categoryModel.list_name = item.list_name;
      categoryModel.list_name_encoded = item.list_name_encoded;
      categoryModel.next_published_date = item.next_published_date;
      categoryModel.normal_list_ends_at = item.normal_list_ends_at;
      categoryModel.previous_published_date = item.previous_published_date;
      categoryModel.published_date = item.published_date;
      categoryModel.published_date_description =
        item.published_date_description;
      categoryModel.updated = item.updated;
      categoryModel.books = this.mapBook(item.books);
      return categoryModel;
    });
  }

  public mapBook(data: any): any {
    return data.map((item: any) => {
      let bookModel: Book = {} as Book;
      bookModel.age_group = item.age_group;
      bookModel.amazon_product_url = item.amazon_product_url;
      bookModel.article_chapter_link = item.article_chapter_link;
      bookModel.asterisk = item.asterisk;
      bookModel.author = item.author;
      bookModel.book_image = item.book_image;
      bookModel.book_image_height = item.book_image_height;
      bookModel.book_image_width = item.book_image_width;
      bookModel.book_review_link = item.book_review_link;
      bookModel.book_uri = item.book_uri;
      bookModel.buy_links = item.buy_links;
      bookModel.contributor = item.contributor;
      bookModel.contributor_note = item.contributor_note;
      bookModel.dagger = item.dagger;
      bookModel.description = item.description;
      bookModel.first_chapter_link = item.first_chapter_link;
      bookModel.isbns = item.isbns;
      bookModel.price = item.price;
      bookModel.primary_isbn10 = item.primary_isbn10;
      bookModel.primary_isbn13 = item.primary_isbn13;
      bookModel.publisher = item.publisher;
      bookModel.rank = item.rank;
      bookModel.rank_last_week = item.rank_last_week;
      bookModel.sunday_review_link = item.sunday_review_link;
      bookModel.title = item.title;
      bookModel.weeks_on_list = item.weeks_on_list;
      return bookModel;
    });
  }
}
