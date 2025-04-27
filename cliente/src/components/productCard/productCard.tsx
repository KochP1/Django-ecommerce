import './productCard.css'
import { useFetch } from '../../hooks';

const url = '';

interface Props {
    id: number
    game: string
    description: string
    price: number
}

export const Card = ({id, game, description, price}: Props) => {
    return (
        <div className="col">
                <div className="card" id={`cardProduct-${id}`}>
                    <img src="" className="card-img-top game-img" />
                    <div className="card-body">
                    <div className="content">
                        <h5 className="card-title">{game}</h5>
                        <p className="card-text">{description}</p>
                        <h6>{price}</h6>
                        <form action="" method="post">
                            <input type="hidden" value={id} name="product-id"/>
                            <button className="btn btn-primary btn-cart">
                                Add to cart
                            </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
    )
}