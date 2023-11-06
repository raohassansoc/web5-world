
//Components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroBanner from "../components/herobanner/HeroBanner";
import Web3doamin from "../components/web3domain/Web3domain";
import Blockchain from "../components/blockchain/Blockchain";
import Swap from "../components/swap/Swap";
import MangoWallet from "../components/mangowallet/MangoWallet";
import Available from "../components/weareavailable/Available";
import Services from "../components/services/Services";
import Rodemap from "../components/rodemap/rodemap";
import Subscribe from "../components/subscribe/Subscribe";
import Tokenomic from "../components/tokenomic/Tokenomic";
import Partners from "../components/partners/partners";
import Presence from "../components/presence/Presence";

export default function HomePage() {
    return (
        <>
            <div className="bg-hero ">
                <Header />
            </div>
            <HeroBanner />
            <Web3doamin />
            <Blockchain />
            <Swap />
            <MangoWallet />
            <Available />
            {/* <Services /> */}
            <Rodemap />
            <Tokenomic />
            {/* <Partners /> */}
            {/* <Presence /> */}
            <Subscribe />
            <br></br><br></br><br></br>
            <Footer />
        </>
    );
}