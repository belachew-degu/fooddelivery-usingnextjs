import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children, home})=> {
    return (
        <>
        <Header home={home}/>
        {children}
        <Footer/>
        </>
    )
}

export default Layout