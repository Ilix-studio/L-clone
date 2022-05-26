import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import Linkedin_Logo from './images/linkedin.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
         {/* Two Container for herder section  */}

       <div className="header__left">
         <img src={Linkedin_Logo} alt="Logo" />
         <div className="header__search">
              <SearchIcon/>
              <input type="text" />
         </div>
       </div>

       <div className="header__right">
           <HeaderOption Icon={HomeIcon} title="Home"/>
           <HeaderOption Icon={SupervisorAccountIcon}   title="My Network"/>
           <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
           <HeaderOption Icon={MessageRoundedIcon} title="Messaging" />
           <HeaderOption Icon={NotificationsIcon} title="Notification" />
           <HeaderOption avatar="" title="Me" />
       </div>
    </div>
  )
}

export default Header