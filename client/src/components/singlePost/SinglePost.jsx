import "./SinglePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Safak</b> </span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi soluta ratione, quod quis exercitationem hic accusamus numquam animi, nam dicta iure eos officiis quae! Quia optio officia repellendus vel eos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi soluta ratione, quod quis exercitationem hic accusamus numquam animi, nam dicta iure eos officiis quae! Quia optio officia repellendus vel eos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi soluta ratione, quod quis exercitationem hic accusamus numquam animi, nam dicta iure eos officiis quae! Quia optio officia repellendus vel eos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi soluta ratione, quod quis exercitationem hic accusamus numquam animi, nam dicta iure eos officiis quae! Quia optio officia repellendus vel eos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi soluta ratione, quod quis exercitationem hic accusamus numquam animi, nam dicta iure eos officiis quae! Quia optio officia repellendus vel eos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi soluta ratione, quod quis exercitationem hic accusamus numquam animi, nam dicta iure eos officiis quae! Quia optio officia repellendus vel eos?</p>
      </div>
    </div>
  );
}

export default SinglePost;
