import Layout from '../../components/layout/Layout'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
import './Home.css'

function Home() {
  return (
    <Layout>
        <Header/>
        <div className="home">
          <Posts/>
          <Sidebar/>
        </div>
    </Layout>
  )
}

export default Home