import './nintendo.css'
import { Card } from '../../components'
import { useFetch } from '../../hooks';

const url = 'http://127.0.0.1:8000/catalog/games/1/';

interface Games {
    id: number
    game: string
    description: string
    price: number
    game_image: string
}


export const NintendoPage = () => {
    const { data, error } = useFetch<Games[]>(url);
    if(error || data === null) {
        return <div>Ups! Hay un error</div>
    }

    console.log(data)
    return (
        <section className="catalog-main-section">
            <div className="nintendo-gif__container">
            <img src="/images/Games/nintGif.gif" alt=""/>
            </div>

            <div className="nintendo-titles__container"><h2>Nintendo Games</h2></div>
            <hr className="section-separator__nintendo"/>
            <div className="catalog-main__wrapper" id="grid-catalog__container">
                {data.map((games) => (
                    <Card id={games.id} game={games.game} description={games.description} price={games.price} game_image={games.game_image} key={games.id}></Card>
                ))}
            </div>

            <div className="nintendo-titles__container"><h2>Nintendo Consoles</h2></div>
            <hr className="section-separator__nintendo"/>
        </section>
    )
}