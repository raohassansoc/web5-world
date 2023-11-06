import Image from "next/image";
import img from '../../assets/images/hero-Img.webp'

export default function Hero() {
    return (
        <>
            <div id="home" className="flex flex-col md:flex-row max-w-screen-xl w-[94%] items-center justify-between mx-auto ">
                <div className="md:w-1/2 p-4 order-2 md:order-1 text-center md:text-left  ">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
                        <span className="mangoname">USDT</span> Introduction

                    </h1>
                    {/* className="mangoborder" */}
                    <p style={{lineHeight:'36px !importent'}} className="text-sm md:text-sm lg:text-lg mt-9">USDT, <span >the pioneering fruit meme coin,</span> stands as the sole project with a thriving live ecosystem.</p>
                    <p className="text-sm md:text-sm lg:text-lg mt-9">
                    It has maintained a market presence since 2022, making it an influential and enduring player in the crypto space.
                    </p>
                    <button className="button mt-7 w-[80%] md:w-[20%]" type="button">
                        <a href="#herobanner">Explore</a>
                    </button>
                </div>
                <div className="md:w-1/2  md:order-2">
                    <Image width={"100%"} height={"100%"} src={img} alt="heroimg" />
                </div>
            </div>

        </>
    );
}