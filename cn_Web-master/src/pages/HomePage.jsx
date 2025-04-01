import Book from "../components/Book"
import { books } from '../../data.json'
import CardL from "../components/Card_HP"
import BreadCrumb from "../components/BreadCrumb"
import CusPagination from "../components/CusPagination"
import "../App.css"


function HomePage(){
    return(
      <div className="container">
        <BreadCrumb />
        <div className="row d-flex justify-content-center">
          <div className="col-md-2 d-none d-lg-block">
            <CardL books={books}/>
          </div>
          <div className="col-md-10" id='book'>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
              {books.map(book => (
                <div className="col d-flex flex-wrap mb-3">
                  <Book data={book} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <CusPagination />
        </div>
      </div>
    )
}

export default HomePage