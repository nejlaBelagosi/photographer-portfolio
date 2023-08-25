import React from "react";
//import icons
import {
    ImFacebook,
    ImTwitter,
    ImInstagram,
    ImPinterest
} from 'react-icons/im';

const Socials = () => {
return <div className="hidden xl:flex ml-24">
    <ul className="flex gap-x-4">
        <li><a href="https://www.facebook.com" target="_blank" className="text-[#526D82]  hover:text-[#27374D] transition"><ImFacebook /></a></li>
        <li><a href="https://www.twitter.com" target="_blank" className="text-[#526D82]   hover:text-[#27374D] transition"><ImTwitter /></a></li>
        <li><a href="https://www.instagram.com" target="_blank" className="text-[#526D82] hover:text-[#27374D] transition"><ImInstagram /></a></li>
        <li><a href="https://www.pinterest.com" target="_blank" className="text-[#526D82] hover:text-[#27374D] transition"><ImPinterest /></a></li>
    </ul>
</div>
};

export default Socials;