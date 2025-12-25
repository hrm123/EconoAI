export default function About() {
    return (
        <div className="container mx-auto py-16 px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">About EconoAI</h1>
            <div className="flex flex-col gap-8 text-lg leading-relaxed">
                <p>
                    Founded in 2024, EconoAI is a boutique software development agency dedicated to democratizing Artificial Intelligence for businesses of all sizes.
                    We believe that AI is not just a buzzword, but a transformative tool that can solve real-world problems and drive significant economic value.
                </p>
                <p>
                    Our team consists of passionate engineers, data scientists, and designers who share a common goal: to build beautiful, intelligent, and influential digital products.
                    From simple landing pages to complex enterprise applications, we bring the same level of dedication and innovation to every project.
                </p>

                <div className="stats shadow mt-8 bg-base-200">
                    <div className="stat place-items-center">
                        <div className="stat-title">Projects Delivered</div>
                        <div className="stat-value">50+</div>
                        <div className="stat-desc">Across 10+ industries</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Client Satisfaction</div>
                        <div className="stat-value text-primary">100%</div>
                        <div className="stat-desc">Based on feedback</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Team Members</div>
                        <div className="stat-value">12</div>
                        <div className="stat-desc">Global experts</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
