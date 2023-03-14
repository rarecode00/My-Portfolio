import React , {useState , useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import firebase from './firebase'

const Navbar = () => {
  const [imageURL , setImageURL] = useState('')
  const location = useLocation()
  useEffect(() => {
    const storageRef = firebase.storage().ref();
    var listRef = storageRef.child('profile/')
    listRef.listAll().then(function(res) {
      res.items.forEach(function(itemRef) {
        itemRef.getDownloadURL().then(function(url) {
          // console.log(url)
          setImageURL(url);
        }).catch(function(error) {
          console.log(error);
        });
      });
    }).catch(function(error) {
      console.log(error);
    });
  }, []);

  const style = {
     borderLeft: '1px solid red'
  }

  return (
    <div className="nav-side">
      {console.log(location.pathname)}
      <div className="profile">
        <div>
          <img src= {imageURL}/>
          <p className="name">Krishna Sharma</p>
          <div className="title">Software Engineer</div>
          <div className="title">Full stack developer</div>
        </div>
        </div>
      <div className="nav-items">
        <Link to="/" className={location.pathname === '/' ? 'border' : 'br-none'}>About</Link>
        <Link to="/experience" className={location.pathname === '/experience' ? 'border' : 'br-none'}>Experience</Link>
        <Link to="/education" className={location.pathname === '/education' ? 'border' : 'br-none'}>Education</Link>
        <Link to="/skills" className={location.pathname === '/skills' ? 'border' : 'br-none'}>Skills</Link>
        <Link to="/interest" className={location.pathname === '/interest' ? 'border' : 'br-none'}>Interest</Link>
      </div>
    </div>
  );
};

export default Navbar;
