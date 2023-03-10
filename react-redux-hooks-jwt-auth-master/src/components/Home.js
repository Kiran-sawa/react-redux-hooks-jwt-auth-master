import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import "../stylefiles/publichomecss.css";
import remotefootbal from "../images/remotefootbal.jpg";


const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
   <>
   <div id="maindivbody">

   <div id="maiinpublicbody">
<h3>
“Every defeat is a victory in itself.” – Francisco Maturana García
</h3>
  </div>

  <div id="header">
         <div id='div1'>
     
         </div>
       
         <div id='div1'>
         </div>

        <div id='div1'>
          </div>


      </div>
   </div>
  


   </>
    
  );
};

export default Home;
