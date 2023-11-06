import Image from "next/image";
import img from '../../assets/images/coinblanck.webp'
import web5 from '../../../../public/images/portfolio-logo.png'

export default function Tokenomic() {
    return (
        <>
            <div className="bg-roadmap w-full items-center mt-20 p-5 text-center">
                {/* <h4 style={{ marginTop: '40px' }} className="mangoname">Tokenomics</h4> */}
                <h1 className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold mb-5">
                    <span className="mangoname"> Tokenomics </span>
                </h1>
                <div className="flex flex-col md:flex-row max-w-screen-xl w-[94%] items-center justify-between mx-auto  pt-5 pb-5">
                    <div className="md:w-1/2 p-4 order-2 md:order-1 text-center md:text-left p-10 ">
                        <h1 className="text-[24px] md:text-[30px] font-bold md:mb-10">
                            <span className="mangoname">powerd by binance smart chain</span>
                        </h1>
                        <span className='text-[20px] md:text-[25px] text-white'>Token Address</span>
                        <h1 style={{ lineHeight: 'normal', color: 'white' }} className="text-[12px] md:text-[16px]">
                            0x9767c8E438Aa18f550208e6d1fDf5f43541cC2c8
                        </h1>
                        <ul className="space-y-4 text-left text-gray-500  mt-10 mb-10">
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 12"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5.917 5.724 10.5 15 1.5"
                                    />
                                </svg>
                                <span className="text-[white]"> 0% tax fees</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 12"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5.917 5.724 10.5 15 1.5"
                                    />
                                </svg>
                                <span className="text-[white]">Total Supply 2,100,000,000,000,000 <span className="mangoname">USDT</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 12"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5.917 5.724 10.5 15 1.5"
                                    />
                                </svg>
                                <span className="text-[white]">30% of the supply of USDT tokens will be burnt</span>
                            </li>
                        </ul>

                        <button className="button mt-7 w-[80%] md:w-[40%]" type="button">
                            <a
                                //  href="https://bscscan.com/token/0x9767c8e438aa18f550208e6d1fdf5f43541cc2c8"
                                target="_blank" className="text-white">Explore on BSC Scan</a>
                        </button>
                    </div>
                    <div className="md:w-1/2  md:order-2">
                        <Image style={{ marginLeft: 'auto', marginRight: 'auto', width: '70%' }} width={"60%"} height={"60%"} src={web5} alt="heroimg" />
                    </div>
                </div>
            </div >
        </>
    );
}