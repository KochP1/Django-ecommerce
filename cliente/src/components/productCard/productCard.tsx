import './productCard.css'

interface Props {
    id: number
    product: string
    description: string
    price: number
    product_image: string
}

export const Card = ({id, product, description, price, product_image}: Props) => {

    console.log(product_image)

    const imageUrl = import.meta.env.MODE === 'development' ? `http://127.0.0.1:8000${product_image}`: `/media${product_image}`;

    return (
        <div className="col">
                <div className="card" id={`cardProduct-${id}`}>
                    <img src={imageUrl} className="card-img-top game-img" />
                    <div className="card-body">
                    <div className="content">
                        <h5 className="card-title">{product}</h5>
                        <p className="card-text">{description}</p>
                        <h6>${price}</h6>
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