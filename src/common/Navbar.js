import navData from "@/data/navbar/data.json"
import Buttons from "@/components/Button"
export default function Navbar() {
    return (
        <section className="border-b border-[#E4E4E4] shadow">
            <nav className="flex h-[75px] py-5 justify-between  max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8">
                <main className="flex justify-between"> 
                    <header className="h-full w-fulll mr-40"><h1 className="text-[#EF4733] text-3xl font-bold">Karthick.<span></span></h1></header>
                    <ul className="flex justify-between items-center">
                        {navData.navbar.map((item, index) => (
                            <li key={index} className="mr-6">
                                <a href={item.path} className="hover:text-gray-300 transition duration-300 text-[14px] leading-[24px] font-semibold hover:text-[#212121] text-[#212121] ">{item.label}</a>
                                {item.dropdown && (
                                    <ul className="lg:flex flex-col absolute bg-gray-800 py-2">
                                        {item.subMenu.map((dropdownItem, dropdownIndex) => (
                                            <li key={dropdownIndex} className="py-2">
                                                <a href={dropdownItem.href} className="hover:text-gray-300 transition duration-300 text-[14px] leading-[24px] font-semibold hover:text-[#212121]">{dropdownItem.label}</a>
                                            </li>))}
                                    </ul>)}
                            </li>))}
                    </ul>
                </main>
                <Buttons text="Contact" />
            </nav>
        </section>
    )
}