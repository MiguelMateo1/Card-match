
const IntroCard = ({hide}) => {

    return (
        <>
            {hide ? <h1></h1> :
                <section className="intro-img-container">
                    <aside className="intro-img">
                        <div className="front"></div>
                        <div className="back"></div>
                    </aside>
                </section>
            }
        </>
        )
}

export default IntroCard
