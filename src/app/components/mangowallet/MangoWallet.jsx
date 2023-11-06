import Image from "next/image";
import img from '../../assets/images/wallet.webp'
export default function MangoWallet() {
    return (
        <>
            <div className="bg-blockchain max-w-screen-xl  w-full z-20 top-0 left-0 text-white" style={{ background: 'linear-gradient(to bottom, #4FC3F7, #1565C0)' }}>
                <div className="flex flex-col md:flex-row max-w-screen-xl w-[94%] items-center justify-between mx-auto  pt-5 pb-5">
                    <div className="md:w-1/2 p-4 order-2 md:order-1 text-center md:text-left p-10 ">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
                            <span className="mangoname">Web5 Wallet</span>

                        </h1>
                        <p className="text-sm md:text-sm lg:text-lg mt-9">Web5 Wallet is your secure and user-friendly wallet solution for managing your degital assets. It provides a convenient way to store, send, and receive various cryptocurrencies while maintaining security and privacy
                            {/* <span className="mangoborder">private keys.</span> */}
                        </p>

                        <p className="text-sm md:text-sm lg:text-lg mt-9">
                            Visit the following to sign up for Web5 Wallet and take command of your cryptocurrency assets:
                        </p>
                        <button className="button mt-7 w-[80%] md:w-[40%]" type="button">
                            <a
                                // href="https://play.google.com/store/apps/details?id=com.cryptoapp.sbgwallet&hl=en_US"
                                target="_blank">Explore Web5 Wallet</a>
                        </button>
                    </div>
                    <div className="md:w-1/2  md:order-2">
                        {/* transform: 'scaleX(-1) scaleY(1)',  */}
                        <Image style={{ marginLeft: 'auto', marginRight: 'auto' }} width={"100%"} height={"100%"} src={img} alt="heroimg" />
                    </div>
                </div>
            </div>
        </>
    );
}