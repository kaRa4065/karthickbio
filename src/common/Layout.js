import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen text-primary-text_color">
            {/* Navbar */}
            <Navbar />

            {/* Content - Centered & Responsive */}
            <main className="flex-grow ">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
