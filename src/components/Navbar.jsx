import { Search, Bookmarks, ArrowDropDown} from "@material-ui/icons"
import "./navbar.scss" 

const Navbar = () => {
return (
<div className="navbar">
  <div className="container">
    <div className="left">
      
      <img src="https://endlessicons.com/wp-content/uploads/2014/01/mountain-icon-1.png" alt="a simple mountain logo" />
      <span>My Diary</span>
      <span>Anxiety Relief</span>
      <span>Motivational</span>
      <span>Meditations</span>
      <span>Ask for help</span>
    </div>
    <div className="right">
      <Search className="navIcons" />
     
      <Bookmarks className="navIcons" />
      <img src="https://thefader-res.cloudinary.com/private_images/w_1440,c_limit,f_auto,q_auto:best/C19002-11-2-Flat-Doja-Cat-Jonnie-Chambers_x3sftv/doja-cat-amala-hot-pink-interview.jpg"
        alt="a profile picture of Doja Cat" />
      <div className="profile">
        
        <ArrowDropDown className="navIcons" />
        <div className="options">
          <span>Settings</span>
          <span>Logout</span>
        </div>
      </div>

    </div>
  </div>
</div>
)
}

export default Navbar