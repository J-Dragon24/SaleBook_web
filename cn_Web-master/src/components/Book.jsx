import { Link } from 'react-router-dom'
import Rating from './Rating';
import Currency from './Currency';

function Book(props) {
    return(
      <Link to={'book/' + props.data.id} className="container w-100 card mt-1 border-0 text-decoration-none shadow" >
        <img src={props.data.images[0].base_url} className="card-img-top" alt={props.data.name} height={180}/>
        <div className="mt-2 card-body">
            {/* tiêu đề */}
            <h6 className="fw-normal card-title" style={{fontSize:'1rem'}}>{props.data.name}</h6>

            <div className="card-subtitle" style={{fontSize:'0.75rem'}}>
                {/* sao */}
                <span className='border-end pe-1'>
                  <Rating st={props.data.rating_average} />
                </span>
                {/* đã bán */}
                <span className='text-secondary fw-light ps-1'>
                  {props.data.quantity_sold ? props.data.quantity_sold.text : ''}
                </span>
            </div>
        </div>
        {/* giá tiền */}
        <p className="card-text fw-medium fs-4 ms-3 mb-4"  style={{ fontSize: '1.25rem' }}>
          <Currency val={props.data.list_price} />
        </p>
        {/* footer */}
        <div className="card-footer bg-white text-center text-body-secondary">
          Giao siêu tốc 2h
        </div>

    </Link>
    )
}


export default Book;
