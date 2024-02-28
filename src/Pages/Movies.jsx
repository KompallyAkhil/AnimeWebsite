import React from "react";
import css from"./Movies.module.css";
import { useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import Main from "./Data.js"
import SubData from "./SubData.js";



function Movies(){

  const [videoUrl, setVideoUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const Playvideo= (url) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeDialog = () => {
    setVideoUrl("");
    setIsModalOpen(false);
  };

  const Data1 = Main.map((listing) => (
    <img onClick={() => Playvideo(listing.videosrc)} src={listing.image} title={listing.title} alt="" />
  ));

  const Data2 = SubData.map((data2) => ( 
      <img className={css.child} onClick={() => Playvideo(data2.videosorurce)} src={data2.image} title={data2.title}  alt=""/>
  ));

  return(<>
    <div className={css.images}>
      {Data1}
    </div>
    <h3>Recently Added</h3>
    <div className={css.main}>
    {Data2}
    </div>
    <Modal isOpen={isModalOpen} onRequestClose={closeDialog} className={css.modal} overlayClassName={css.overlay}>
      <ReactPlayer controls={true}height={690} width={1175} loop className={css.reactplayer} url={videoUrl} playing={true}></ReactPlayer>
    </Modal>
    </>)
}
export default Movies;