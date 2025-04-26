import './nintendo.css'

export const NintendoPage = () => {
    return (
        <section className="catalog-main-section">
            <div className="nintendo-gif__container">
            <img src="/images/Games/nintGif.gif" alt=""/>
            </div>

            <div className="nintendo-titles__container"><h2>Nintendo Games</h2></div>
            <hr className="section-separator__nintendo"/>
            <div className="catalog-main__wrapper" id="grid-catalog__container">

            </div>

            <div className="nintendo-titles__container"><h2>Nintendo Consoles</h2></div>
            <hr className="section-separator__nintendo"/>
        </section>
    )
}