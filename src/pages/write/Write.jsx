import Layout from '../../components/layout/Layout'
import './Write.css'

function Write() {
  return (
    <Layout>
      <div className='write'>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class="fa-solid fa-plus"></i>
                </label>
                <input style={{display: 'none'}} type="file" id='fileInput' />
                <input className='writeInput' autoFocus={true} type="text" placeholder='Title' />
            </div>
            <div className="writeFormGroup">
                <textarea className='writeInput writeText' type="text" placeholder='tell us your story...' ></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
    </Layout>
  )
}

export default Write