import Image from "next/image";
import img from '../../assets/images/available.svg'
import loder from '../../assets/images/giff/loader.gif'
export default function Available() {
    return (
        <>
            <div className="w-[94%] md:w-[65%] items-center mt-10 p-5 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold mb-10">
                    <span className="mangoname"> We Are Available </span>
                </h1>
                <Image className="md:mt-20" style={{ width: '100%' }} height={100} src={img} alt="rodemap" />
                <div className="p-auto mt-6">
                    <Image style={{ width: '20%' }} className="rdimg" src={loder} alt="progress" />
                </div>
            </div>
        </>
    );
}