import React, {  useEffect } from 'react';

function useShowLife (name) {
  useEffect(() =>{
    console.log(`${name}被创建`);
    return () => {
      console.log(`${name} 被销毁`)
    }
  }, [name])
}

const About = (props) => {
  useShowLife('About');
  return <h1>About</h1>
}

const Profile = (props) => {
  useShowLife('Profile');
  return <h1>Profile</h1>

}

function Home(props){
  useShowLife('Home');
  return (
    <div>
      <hr/>
      <h1>Home</h1>
      <Profile/>
      <About/>
    </div>
  );
}

export default Home;
