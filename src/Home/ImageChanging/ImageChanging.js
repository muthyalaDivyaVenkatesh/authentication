import React, { useEffect, useState } from 'react'
import styles from './ImageChanging.module.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon  from '@mui/icons-material/ArrowRight';
import { useContext } from 'react';
import {ContextClick}  from '../../context/ContextClick'


const img1 = require('../../assets/bg1.jpg')
const img2 = require('../../assets/bg2.jpg')
const img3 = require('../../assets/bg3.jpg')

export default function ImageChanging() {
    let imageCollection = [img1, img2, img3]
    // state 
    let [displayImageId,setDisplayImageId] = useState(0)
    let [displayImage,setDisplayImage] = useState(imageCollection[displayImageId])
    let closeSubNav = useContext(ContextClick)
    // try to reload
    useEffect(() => {
        setInterval(() => {
            changeBg()
        }, 8000)
    }, [displayImage])


    function changeBg() {
        console.log(displayImage,"we  are seeing the Starting Image")
        if (displayImage < imageCollection.length - 1 ) {
            setDisplayImageId((prevValue) => prevValue + 1)
            setDisplayImage(imageCollection[displayImageId])
        }
        else {
            console.log("we re inside ELse")
            setDisplayImageId(0)
            setDisplayImage(imageCollection[displayImageId])
        }
    }

    function clickNextImage () { 
        console.log("U have Clicked Next Image")
        if(displayImage == 3 ){
            return
        }
        setDisplayImageId(displayImage + 1)
        setDisplayImage(imageCollection[displayImageId])
    } 

    function clickPrevImage() {
        console.log("You have Clicked Previous Image")
        if(displayImage == 0){
         return    
        }
        setDisplayImageId(displayImage - 1)
        setDisplayImage(imageCollection[displayImageId])
    }

    function closeHeaderSub(){
        console.log("clicked")
        console.log(closeSubNav.isClicked)
        closeSubNav.closeBg(true)
    }

    return (
        <div className={styles.ImageContainer} onClick={closeHeaderSub}>
            <ArrowLeftIcon className={styles.IconStyle} onClick={clickPrevImage}/>
            <img className={styles.Image} src={displayImage} />
            <ArrowRightIcon  className={[styles.IconStyle,styles.IconStyleRight]} onClick={clickNextImage}/>
        </div>
    )

}