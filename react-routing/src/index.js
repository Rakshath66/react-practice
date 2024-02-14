import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, useParams, NavLink } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Home = () => {
  console.log("hoi");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((data) => setPosts(data));
  }, [])

  return (
    <div>
      <div>
      {posts.map((post) => {
        <NavLink style={{display:"block"}} to={`/post/${post.id}`}>{post.title}</NavLink>
      })}
      </div>
    </div>
  )
}
const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  )
}
const Account = () => {
  return (
    <div>
      <h1>Account Page</h1>
    </div>
  )
}
const SayUser = () => {
  const params = useParams();

  return (
    <div>
      <h1>Your name is {params.userId}</h1>
    </div>
  )
}
const PostPage = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    .then((data) => data.json())
    .then((data) => setData(data));
  })

  if(data === null) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

root.render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Multilevel Routing */}
          <Route path="/account/profile" element={<Profile />} /> 
          <Route path="account">
             <Route path="" element={<Account />} />
             <Route path="profile" element={<Profile />} />
          </Route>

          {/* Dynamic Routing */}
          <Route path="/user/:userId" element={<SayUser />} />
          <Route path="/post/:postId" element={<PostPage />} />

        </Routes>
     </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
