import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";


const AlbumCardHolder= styled.div`
    ${tw`
        flex
        w-1/6
        bg-gray-500
        m-0
        top-0
        p-0
        border-8
        border-red-500
    `}
  
  &&{
      height: 90vh;
    }
`;

const SideNavbar = () => {
return(
    <AlbumCardHolder>
        <p>coming soon</p>
    </AlbumCardHolder>
)
}

export default SideNavbar;