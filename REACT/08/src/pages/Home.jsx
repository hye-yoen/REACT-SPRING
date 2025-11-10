import Layout from "../layours/Layout"

const Home = () => {
    console.log("/..")
    return(
        <Layout isShowAside={false}>
            <h1>HOME PAGE</h1>
            <p>
                홈페이지 메인 영역입니다
            </p>
        </Layout>
    )
}

export default Home
