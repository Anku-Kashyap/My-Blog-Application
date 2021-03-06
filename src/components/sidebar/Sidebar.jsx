import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className = "sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img src="https://images.pexels.com/photos/1458921/pexels-photo-1458921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ad omnis atque doloremque explicabo.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">
                CATEGORIES
            </span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>

        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">
                FOLLOW US
            </span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
        </div>

    </div>
  )
}
