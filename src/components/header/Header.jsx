import "./header.css"
export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className ="headerImg" src="https://images.pexels.com/photos/3292065/pexels-photo-3292065.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
    </div>
  )
}
