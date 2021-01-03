import React from 'react';
import HockContext from "../hocks/HockContext";

function Index(){
  const [user, token] = HockContext();
  console.log(user, token);
  return (
    <div>

    </div>
  );
}

export default Index ;
