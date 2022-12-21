import Layout from '../../components/layout/Layout'
import SinglePost from '../../components/singlePost/SinglePost'
import Sidebar from '../../sidebar/Sidebar'
import './Single.css'

function Single() {
  return (
    <Layout>
      <div className='single'>
      <SinglePost/>
      <Sidebar/>
    </div>
    </Layout>
  )
}

export default Single