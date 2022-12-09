import HomeTop from "../components/HomeTop"
import HomeBottom from "../components/HomeBottom"
import './Home.css'

function Home() {
    return (
        <div className="home">
            <HomeTop />
            <HomeBottom />
        </div>
    )
}

export default Home