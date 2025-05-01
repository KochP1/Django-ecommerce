import './nintendo.css'
import { Card } from '../../components'
import { useFetch } from '../../hooks';

const url = 'http://127.0.0.1:8000/catalog/games/1/';

interface Game {
    id: number
    game: string
    description: string
    price: number
    game_image: string
}

interface Console {
    id: number
    console: string
    description: string
    price: number
    console_image: string
}

export const NintendoPage = () => {
    const { data: gamesData, error: gamesError } = useFetch<Game[]>(url);

    const { data: consolesData, error: consolesError } = useFetch<Console[]>('http://127.0.0.1:8000/catalog/consoles/1/');

    return (
        <section className="catalog-main-section">
            <div className="nintendo-gif__container">
            <img src="/images/Games/nintGif.gif" alt=""/>
            </div>

            <div className="nintendo-titles__container"><h2>Nintendo Games</h2></div>
            <hr className="section-separator__nintendo"/>
            <div className="catalog-main__wrapper" id="grid-catalog__container">
                {gamesData !== null && !gamesError && gamesData.map((games) => (
                    <Card id={games.id} product={games.game} description={games.description} price={games.price} product_image={games.game_image} key={games.id}></Card>
                ))}
            </div>

            <div className="nintendo-titles__container"><h2>Nintendo Consoles</h2></div>
            <hr className="section-separator__nintendo"/>
            <div className="catalog-main__wrapper" id="grid-catalog__container">
                {consolesData !== null && !consolesError && consolesData.map((consoles) => (
                    <Card id={consoles.id} product={consoles.console} description={consoles.description} price={consoles.price} product_image={consoles.console_image} key={consoles.id}></Card>
                    ))}
            </div>
        </section>
    )
}