import './landing.css'

export const Landing = () => {
    return (
        <div className='landing__wrapper'>
            <div className='home__wrapper'>
                <div className='cta__container'>
                    <h1>Relive your best memories, <br/> one game at a time.</h1>
                    <h3>Your childhood called... it wants to play with you again!</h3>
                    <p>Register to our website now and buy two games for the price of one!!!</p>
                    <button type="button" className="btn btn-primary btn-cta">Start the grind!!</button>
                </div>
                <div className="cta-img__container">
                    <img src="/images/Mario.png" alt="Super mario"/>
                </div>
            </div>

            <hr className="section-separator__landing"/>

            <div className="landing__h2">
                <h2>Yesterday's games, the same old excitement. Get your favorites today!</h2>
            </div>

            <div className="landing-info__container">
                <div className="p__container">
                    <h3>Retro gaminglives here. Plug into the past!</h3>
                    <p>Step into a time machine of pixels and nostalgia with our handpicked collection of authentic retro games and consoles. Whether you're hunting for a pristine NES with Mega Man 2, a Game Boy loaded with Pokémon Red, or a rare Neo Geo AES cartridge, we’ve got the classics that defined gaming history.</p>
                </div>

                <div className="landing-img__container">
                </div>
            </div>

            <div className="landing-info__container">
                <div className="landing-img__container landing-img__container-2">
                </div>

                <div className="p__container">
                    <h3>Do you miss 8-bit graphics? We do too! That's why we have them here.</h3>
                    <p>From the iconic Super Mario Bros. on NES to Sonic The Hedgehog on Sega Genesis, we offer authentic, tested, and carefully preserved classics—so you can experience them just like you remember. Whether you're a collector or a nostalgic gamer, every purchase comes with a blast from the past. Game on, the retro way!</p>
                </div>

            </div>

            <div className="landing-info__container">
                <div className="p__container">
                    <h3>Relive your favorites games, on your favorites consoles</h3>
                    <p>Whether you're chasing high scores in Pac-Man, saving Hyrule in Zelda, or racing in Mario Kart, we’ve got the classic games and consoles to bring back those unforgettable memories. Plug in, power up, and play like it’s 1990!</p>
                </div>

                <div className="landing-img__container">
                </div>
            </div>

        </div>
    )
}