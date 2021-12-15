import "./singlePost.css"
export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg"
            src="https://images.pexels.com/photos/434046/pexels-photo-434046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur. 
            <div className="singlePostEdit">
                <i className="singlePostIcon fas fa-pen-alt"></i>
                <i className="singlePostIcon fas fa-trash"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:<b>Ankush</b></span>
                <span className="singlePostDate">Author:<b>1 hour ago</b></span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet iste veritatis, sit sapiente esse minima exercitationem soluta, amet fugit quos, ut sequi excepturi ratione voluptate deleniti perspiciatis tempora dolore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet iste veritatis, sit sapiente esse minima exercitationem soluta, amet fugit quos, ut sequi excepturi ratione voluptate deleniti perspiciatis tempora dolore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet iste veritatis, sit sapiente esse minima exercitationem soluta, amet fugit quos, ut sequi excepturi ratione voluptate deleniti perspiciatis tempora dolore.
            </p>
        </div>
      
    </div>
  )
}
