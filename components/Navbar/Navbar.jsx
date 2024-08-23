import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./Navbar.module.css";
import { MdNotificationsNone } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import {Discover, HelpCenter, Notification, Profile, Sidebar , } from "./index";
import Button from "../componentindex";
import images from "../../img";






const Navbar = () => {
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [menu, setMenu] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);
    
    
    const opnenMenu = (e) => {
        const btnText = e.target.innerText;
        if (btnText === "Discover") {
            setDiscover(true);
            setHelp(false);
            setNotification(false);
            setMenu(false);
        } else if (btnText === "Help Center") {
            setDiscover(false);
            setHelp(true);
            setNotification(false);
            setMenu(false);
        } else if (btnText === "Notification") {
            setDiscover(false);
            setHelp(false);
            setNotification(true);
            setMenu(false);
        }
    }

    const opnenNotification = (e) => {
        if (!notification) {
            setNotification(true);
            setDiscover(false);
            setHelp(false);
            setMenu(false);
        } else {
            setNotification(false);
        }
    }


    return (

        <div className={Style.navbar}>
            <div className={Style.navbar_container} >
                <div className={Style.navbar_container_left}>
                    <div className={Style.logo}>
                        <Image src={images.logo}
                            alt="NFT Market place"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className={Style.navbar_container_left_input_box}>
                        <input type="text" placeholder="Search for NFTs" />
                        <BsSearch onClick={()=>{}} className="Style.seach_icon" />

                    </div>
                </div>
                <div className={Style.navbar_container_right}>
                    <div className={Style.navbar_container_right_discover}>
                        <p onClick={(e) => opneMenu(e)}>Discover</p>
                        {discover && (
                            <div className={Style.navbar_container_right_discover_box}>
                                <Discover />
                            </div>
                        )}
                    </div>

                        <div className={Style.navbar_container_help}>
                            <p onClick={(e) => opneMenu}>HelpCenter</p>
                            {
                                help && (
                                    <div className={Style.navbar_container_help_box}>
                                    <HelpCenter />
                                </div>
                            )}
                        </div>


                        <div className={Style.navbar_container_right_notify}>

                            <MdNotificationsNone className={Style.notify} onclick={() => opnenNotification()} />
                            {notification && <Notification />}
                            
                        </div>
                        <div className={Style.navbar_container_right_button}>
                            <Button btnText="Create" />
                        </div>

                        <div className={Style.navbar_container_right_profile_box}>
                            <div className={Style.navbar_container_right_profile}>
                                <Image src={images.user1}
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    onclick={() => opneProfile()}
                                    className={Style.navbar_container_right_profile}
                                />
                                {profile && <Profile />}
                            </div>
                    </div>
                    
                    <div className={Style.navbar_container_right_menuBtn}>
                        <CgMenuRight    className={Style.menuIcon}
                            onClick={() => setOpenSideBar()} />
                    </div>
            </div>
            </div>
            {
                openSideMenu && (
                    <div className={Style.sideBar}>
                        <Sidebar  setOpenSideMenu = {setOpenSideMenu} />
                    </div>
                )
            }



     </div>

    )
}


export default Navbar;