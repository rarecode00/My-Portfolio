import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import firebase from './firebase'

const Navbar = () => {
  const [imageURL , setImageURL] = useState('')
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
      <div className="profile">
        <div>
          <img src= {imageURL}/>
          <p className="name">Krishna Sharma</p>
          <div className="title">Software Engineer</div>
          <div className="title">Full stack developer</div>
        </div>
        </div>
      <div className="nav-items">
        <Link to="/" className="border">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/interest">Interest</Link>
      </div>
    </div>
  );
};

export default Navbar;
