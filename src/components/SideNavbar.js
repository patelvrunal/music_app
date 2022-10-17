import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";


const AlbumCardHolder= styled.div`
    ${tw`
        flex
        bg-black
        m-0
        top-0
        p-0
        border-8
        border-red-500
        h-screen
    `}
  
  &&{
      //height: 90vh;
      width : 20vw;
    }
`;



const SideNavbar = () => {
return(
    <AlbumCardHolder>
        <div class="logo">
            <a href="#">Logo</a>
        </div><div>
        <br/><br/><br/>
        <h1 class="text">coming soon</h1>
    </div>
    </AlbumCardHolder>
)
}

export default SideNavbar;