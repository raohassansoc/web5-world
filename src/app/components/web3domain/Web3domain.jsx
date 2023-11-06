import Image from "next/image";
import img from '../../assets/images/about.webp'
export default function Web3doamin() {
    return (
        <>
            <div className="bg-web3 max-w-screen-xl  w-full z-20 top-0 left-0 text-white mt-20">
                <div className="flex flex-col md:flex-row max-w-screen-xl w-[94%] items-center justify-between mx-auto  pt-5 pb-5">
                    <div className="md:w-1/2 p-4 order-2 md:order-2 text-center md:text-right p-10 ">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
                            <span className="mangoname">Web5 Domain</span>

                        </h1>
                        {/* <h2 className="text-md md:text-md lg:text-lg">Web3. It's decentralized, blockchain-based, and infinite possibilities. </h2> */}
                        <p className="text-sm md:text-sm lg:text-lg mt-9">
                        Discover the future of the internet with USDT Web5 domains, an innovative technology from <a href="" target="_blank" className="mangocolor"> USDT Domain.</a>
                        </p>
                        <p className="text-sm md:text-sm lg:text-lg mt-9">
                        These decentralized domains have an amazing feature - you don't have to renew them! You can protect your online presence for your whole life. Plus, the exciting part is that you can earn money by just keeping your <a href="" target="_blank" className="mangocolor">Web5 domain.</a>  
                        </p>
                        <p className="text-sm md:text-sm lg:text-lg mt-9">
                        Explore the endless possibilities of the web with Web5 - it's your domain, your money, and your digital legacy, all in one! Don't forget to take a look at this amazing revolution. Check it out right now. </p>
                        <button className="button mt-7 w-[80%] md:w-[35%]" type="button">
                          <a
                        //    href="https://mangotree.ai/" 
                           target="_blank">  Explore Web5 Tree </a>
                        </button>
                    </div>
                    <div className="md:w-1/2  md:order-1">
                        <Image style={{ transform: 'scaleX(-1) scaleY(1)' }} width={"100%"} height={"100%"} src={img} alt="heroimg" />
                    </div>
                </div>
            </div>

        </>
    );
}