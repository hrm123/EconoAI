
import Image from 'next/image'

export default function About() {
    return (
        <div className="container mx-auto py-16 px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">About EconoAI</h1>
            <div className="flex flex-col gap-8 text-lg leading-relaxed">
                <p>
                    EconoAI is a boutique software development agency developing economic solutions (websites, Mobile apps etc) using Artificial Intelligence technologies wherever they add value.
                    We believe that AI is not just a buzzword, but a transformative tool that can solve real-world problems and drive significant economic value.
                </p>
                <p>
                    Our team consists of passionate engineers who share a common goal: to build beautiful, intelligent, and influential digital products.
                    From simple landing pages to complex enterprise applications, we bring the same level of dedication and innovation to every project.
                </p>

                <div className="stats shadow mt-8 bg-base-200">
                    <div className="stat place-items-center">
                        <div className="stat-title">Projects Delivered</div>
                        <div className="stat-value"></div>
                        <div className="stat-desc">Many innovative solutions  for various clients - Retail, Ecommerce, Financial & Manufacturing</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Client Satisfaction</div>
                        <div className="stat-value text-primary">100%</div>
                        <div className="stat-desc"><Image
                            src="/made_in_usa.svg" // Path relative to the public folder
                            alt="Description of the image"
                            width={200}
                            height={60}
                            /></div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}
