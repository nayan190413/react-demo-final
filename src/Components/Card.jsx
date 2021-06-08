import { Link } from 'react-router-dom';
import '../Css/card.css';

const Card = (props) => {
    return (<>
        <div className="card cardstyle">
            <img className="card-img-top p-2 imgClass" src={`https://dev.perfectprof.com/storage/app/${props.profile_pic}`} alt="" />
            <div className="card-body">
                <h3 className="card-title"><span style={{color:"purple"}}>Name of Professor:</span>{props.firstname} {props.lastname}</h3>
                <Link to={`/professor/${props.id}`} className='btn mt-4 button'>Explore</Link>
            </div>
        </div>
    </>);
}

export default Card;