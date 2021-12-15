import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>

            </div>
            <span className="postTitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fuga dolorem eligendi eveniet, reprehenderit nisi inventore doloribus, earum praesentium provident sunt similique in dolorum quod commodi quia nihil itaque id!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fuga dolorem eligendi eveniet, reprehenderit nisi inventore doloribus, earum praesentium provident sunt similique in dolorum quod commodi quia nihil itaque id!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fuga dolorem eligendi eveniet, reprehenderit nisi inventore doloribus, earum praesentium provident sunt similique in dolorum quod commodi quia nihil itaque id!</p>
    </div>
  )
}
