export default function Footer() {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-auto">
            <div className="bg-[url('/econoai_logo.png')] bg-cover bg-center w-full h-10">
            </div>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by EconoAI</p>
            </aside>
        </footer>
    )
}
