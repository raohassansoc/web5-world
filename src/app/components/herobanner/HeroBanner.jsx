export default function HeroBanner() {
    return (
        <>
            <div
                className="addframe hidemob w-[94%] items-center p-5 text-center"
                style={{ zIndex: '100', marginTop: '-50px' }} >
                <h1 id="herobanner" className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold mb-10">
                    <b>USDT's Potential</b>
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 text-left gap-5 max-w-screen-xl w-[94%] mx-auto">
                    <div className="p-5">
                        <h3><span className="frametext"></span><span className="frameplus">22k+</span>
                            <br /><span className="foempara">Holders</span></h3>
                    </div>
                    <div className="p-5">
                        <h3><span className="frametext"></span><span className="g2">20+</span>
                            <br /><span className="foempara">Listed Exchanges</span></h3>
                    </div>
                    <div className="p-5">
                        <h3><span className="frametext"></span><span className="g3">7+</span>
                            <br /><span className="foempara">Our Live Ecosystems</span></h3>
                    </div>
                    <div className="p-5">
                        <h3><span className="frametext"></span><span className="g4">10+</span>
                            <br /><span className="foempara">Presence Crypto Events</span></h3>
                    </div>
                </div>
            </div>
        </>
    );
}