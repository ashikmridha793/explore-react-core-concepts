import Book from "./BookStor";
export default function BookStor({books}){
      console.log(books)
      return(
            <div>
                  <h3>Books: {books.length}</h3>
                  {
                        books.map(book => <Book book={book}></Book>)
                  }
            </div>
      )
}