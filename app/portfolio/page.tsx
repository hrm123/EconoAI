export default function Portfolio() {
    const projects = [
        { title: "Finance Bot", description: "AI-powered financial advisor chatbot.", tags: ["AI", "Chatbot", "Finance"] },
        { title: "HealthScan", description: "Image recognition app for medical diagnosis.", tags: ["Computer Vision", "Healthcare", "Mobile"] },
        { title: "MarketPredict", description: "Predictive analytics dashboard for stock trends.", tags: ["Data Science", "Dashboard", "Web"] },
        { title: "EduTutor", description: "Personalized learning platform driven by AI.", tags: ["EdTech", "Recommendation Engine"] },
    ];

    return (
        <div className="container mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-shadow duration-300">
                        <figure className="h-48 bg-base-200 flex items-center justify-center">
                            <span className="text-4xl opacity-20">Preview</span>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="card-actions justify-end mt-4">
                                {project.tags.map(tag => (
                                    <div key={tag} className="badge badge-outline">{tag}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
