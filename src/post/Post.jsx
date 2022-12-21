import './Post.css'

function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80" alt="blog" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam repudiandae perferendis velit quas eligendi esse eius fugit possimus voluptas saepe voluptatibus, perspiciatis consectetur, magni similique neque tenetur nulla numquam?</p>
    </div>
  )
}

export default Post