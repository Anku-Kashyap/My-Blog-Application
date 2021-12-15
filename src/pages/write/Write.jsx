import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg"
        src="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
      <form className="writeForm">
          <div className="writeFormGroup">
              <label htmlFor="fileInput">
              <i class="writeIcon fas fa-plus"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}} />
              <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
              <textarea placeholder="Tell your Story..." type="text" className="writeInput writeText"></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
