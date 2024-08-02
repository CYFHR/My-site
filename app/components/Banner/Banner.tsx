import Image from "next/image";



const Banner = () => {
    return (
       
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                        Decentralize and Conquer
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                        Revolutionize your business with blockchain&apos;s immutable trust. <br /> We offer comprehensive services including POC development, marketplace creation, and smart contract auditing.
                        </p>
                    </div>


                    {/* <div className="text-center mt-5">
                        <button type="button" className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'>
                            See our portfolio
                        </button>
                        <button type="button" className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
                            More info
                        </button> */}
                        
                    </div>
                    <div style={{ textAlign: 'center' }}>
                    <Image src={'/assets/banner/block1.svg'} alt="banner-image" width={1200} height={598} />
                    </div>
                </div>
            
       
    )
}

export default Banner;
