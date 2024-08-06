'use client';
import Link from "next/link";
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        link: ['Home', 'Project', 'About', 'Contact'],
    },
    // {
    //     id: 2,
    //     link: ['Help', 'Resources', 'Application', 'Team']
    // }
]

const footer = () => {
    return (
        <>
        <div className="bg-darkblue -mt-16" id="footer">
            <div className="mx-auto max-w-2xl pt-6 sm:pt-10 md:pt-12 lg:pt-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 pb-6 sm:pb-10 md:pb-12 lg:pb-16">
                <div className="my-12 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4 md:col-span-12 lg:col-span-4'>
                        <img src={'/assets/footer/logo.svg'}  alt="logo" className='pb-8' />
                        <div className='flex gap-4'>
                            <Link href="https://github.com/CYFHR" target="_blank" className='footer-fb-icons'>
                                <Image src={'/assets/footer/github.svg'} alt="Github" width={20} height={20} />
                            </Link>
                            <Link href="https://cyfhr.com/" target="_blank" className='footer-icons'>
                                <Image src={'/assets/footer/globe-solid.svg'} alt="globe" width={20} height={20} />
                            </Link>
                            <Link href="https://in.linkedin.com/" target="_blank" className='footer-icons'>
                                <Image src={"/assets/footer/Linkedin1.svg"} alt="Linkedin" width={20} height={20} />
                            </Link> 
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2 md:col-span-4 lg:col-span-2">
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" target="_blank" className="text-white text-sm font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CLOUMN-4 */}

                    <div className='col-span-4 md:col-span-4 lg:col-span-4'>
                        <div className="flex gap-2">
                            <Image src={'/assets/footer/mask.svg'} alt="mask-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">Maharashtra, India</h5>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <Image src={'/assets/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">+91 55 34 11 44 11</h5>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <Image src={'/assets/footer/email.svg'} alt="email-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">cyfhr.portal@gmail.com</h5>
                        </div>
                    </div>

                </div>

                {/* All Rights Reserved */}

                <div className='py-4 lg:flex items-center justify-between border-t border-t-bordertop'>
                    <h4 className='text-offwhite text-sm text-center lg:text-start font-normal'>@2024 All Rights Reserved by <Link href="https://cyfhr.com/" target="_blank"> CYFHR.com</Link></h4>
                    {/* <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                        <div className="h-5 bg-bordertop w-0.5"></div>
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                    </div> */}
                </div>

            </div>
        </div>

        <div className="relative">
            {/* Floating WhatsApp Button */}
            <a href="https://api.whatsapp.com/send?phone=919284640248&text=Hello%20cypher%20what's%20up%20!" 
                className="fixed bottom-20 right-10 text-white rounded-full w-14 h-14 flex items-center justify-center z-50 glowing-whatsapp" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ backgroundColor: '#25D366' }}>
                <i className="fab fa-whatsapp fa-2x" style={{ color: '#FFFFFF' }}></i>
            </a>

            {/* Floating Telegram Button */}
            <a href="https://t.me/your_telegram_username" 
                className="fixed bottom-36 right-10 text-white rounded-full w-14 h-14 flex items-center justify-center z-50 glowing-telegram" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ backgroundColor: '#0088cc' }}>
                <i className="fab fa-telegram-plane fa-2x"></i>
            </a> 
        </div>

        <style jsx>{`
            @keyframes glowing {
                0% { box-shadow: 0 0 5px #25D366; }
                50% { box-shadow: 0 0 20px #25D366; }
                100% { box-shadow: 0 0 5px #25D366; }
            }

            @keyframes glowing-telegram {
                0% { box-shadow: 0 0 5px #0088cc; }
                50% { box-shadow: 0 0 20px #0088cc; }
                100% { box-shadow: 0 0 5px #0088cc; }
            }

            .glowing-whatsapp {
                animation: glowing 1.5s infinite;
            }

            .glowing-telegram {
                animation: glowing-telegram 1.5s infinite;
            }
        `}</style>
    </>
    );
}

export default footer;