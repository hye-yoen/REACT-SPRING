import Header from "./Header"
import Aside from "./Aside"
import Section from "./Section"
import Footer from "./Footer"

import "./css/Layout.css"

const Layout = ({children,isShowAside=true}) => { //기본값 ture 설정
    return(
        <div className="wrapper">
            <Header />

            <main>
                {isShowAside && <Aside />}
                <Section>
                    {children} 
                </Section>
            </main>

            <Footer />
        </div>
    )
}
export default Layout