import "./App.css";
import React, { useEffect, useState } from "react";
import db from "./firebase-config";
import Card from "./Components/Card";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);

  function handleChange(e) {
    const { checked, value } = e.target;
    if (checked) {
      setSkills((pre) => [...pre, value]);
    }
  }
  const usersCollectionRef = collection(db, "students");

  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(usersCollectionRef);
      const usersList = usersSnapshot.docs.map((doc) => doc.data());
      setData(usersList);
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    await addDoc(usersCollectionRef, {
      Name: name,
      Email: email,
      Website: website,
      Image: image,
      Gender: gender,
      Skills: skills,
    });
  };

  const renderCards = data.map((user) => {
    return (
      <Card
        user={user}
        name={user.Name}
        email={user.Email}
        website={user.Website}
        image={user.Image}
        gender={user.Gender}
        skills={user.Skills}
        key={user.id}
      />
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>STUDENT ENROLLMENT FORM</h1>
      </header>
      <div className="form-container">
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="website">website</label>
            <input
              type="text"
              id="website"
              placeholder="Enter your website"
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
            />
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              placeholder="Enter your image URL"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            <label>Gender</label>
            <div className="radio-grp">
              <div className="radio">
                <input
                  type="radio"
                  id="gender"
                  value="male"
                  name="gender"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="gender"
                  value="female"
                  name="gender"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <label>Skills</label>
            <div className="radio-grp">
              <div className="radio">
                <input
                  type="checkbox"
                  id="language"
                  value="java"
                  name="language"
                  onChange={handleChange}
                />
                <label htmlFor="java">Java</label>
                <input
                  type="checkbox"
                  id="language"
                  value="CSS"
                  name="language"
                  onChange={handleChange}
                />
                <label htmlFor="CSS">CSS</label>
                <input
                  type="checkbox"
                  id="language"
                  value="HTML"
                  name="language"
                  onChange={handleChange}
                />
                <label htmlFor="HTML">HTML</label>
              </div>
            </div>
          </div>
          <div className="btn-grp">
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn" type="reset">
              Reset
            </button>
          </div>
        </div>
        <span className="verticle-line"/>
        <div className="table">
          <table>
            <tbody>
              <tr>
                <th>Description</th>
                <th>Image</th>
              </tr>
              {renderCards}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
