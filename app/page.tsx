import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Innovative AI Solutions</h1>
            <p className="py-6">
              EconoAI creates cutting-edge websites and mobile applications for businesses, leveraging the power of Artificial Intelligence to drive growth and efficiency.
            </p>
            <Link href="/portfolio" className="btn btn-primary">View Our Work</Link>
          </div>
        </div>
      </div>

      {/* Services/Features Section */}
      <div className="py-20 px-4 max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body items-center text-center">
              <h2 className="card-title">AI Integration</h2>
              <p>Seamlessly integrate AI models into your existing workflows and applications.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Web Development</h2>
              <p>Modern, responsive, and fast websites built with Next.js and TailwindCSS.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Mobile Apps</h2>
              <p>Native and cross-platform mobile applications powered by intelligent backends.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
