import Image from "next/image";
import img from '../../assets/images/swap.webp'
export default function Swap() {
    return (
        <>
            <div className="bg-web3 max-w-screen-xl  w-full z-20 top-0 left-0 text-white">
                <div className="flex flex-col md:flex-row max-w-screen-xl w-[94%] items-center justify-between mx-auto pt-5 pb-5">
                    <div className="md:w-1/2 p-4 order-2 md:order-2 text-center md:text-right p-10 ">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
                            <span className="mangoname">SWAP</span>

                        </h1>
                        <p className="text-sm md:text-sm lg:text-lg mt-9 mb-6">Web5 Swap is your gateway to decentralized trading and liquidity provision. It's a user-friendly decentralized exchange where you can swap, stake, and yield farm various cryptocurrencies.
                        </p>

                        <p className="text-sm md:text-sm lg:text-lg mt-9 mb-6">

                            To explore the exciting world of decentralized trading and liquidity provision

                        </p>
                        <button className="button" type="button"><a 
                        // href="https://www.mangoswapp.com/"
                         target="_blank" >Explore Web5 Swapp</a></button>

                        {/* <button className="button mt-7 w-[80%] md:w-[20%]" type="button">
                            Contact
                        </button> */}
                    </div>
                    {/* style={{ transform: 'scaleX(-1) scaleY(1)' }} */}
                    <div className="md:w-1/2  md:order-1">
                        <Image width={"100%"} height={"100%"} src={img} alt="heroimg" />
                    </div>
                </div>
            </div>

        </>
    );
}