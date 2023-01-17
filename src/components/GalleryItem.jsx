import { useState } from 'react';
import axios from 'axios';

function GalleryItem({ galleryItem }){
    const [isFlipped, setIsFlipped] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isLikedCount, setIsLikedCount] = useState(0);

    const toggleFlipped = () => {
        setIsFlipped(!isFlipped)
        console.log('in toggleFlipped')
    } 

    const toggleAndCountLiked = () => {
        setIsLiked(!isLiked);
        setIsLikedCount(isLikedCount + 1)
        console.log('in isLiked')
        updateLiked();
    }

    const updateLiked = (id, isLikedCount) => {
        axios({
            method: 'POST',
            url: `/gallery/like/${id}`,
            data: {
            id: id,
            likes: {isLikedCount}
            }
        }).then((response) => {
            props.getGallery()
            console.log(response)
        }).catch((error) => {
            console.log('updateLiked error:', error);
        })
    }
    
    
    if (isFlipped === false) {
    return (
        <>
            <img src={galleryItem.path} key={galleryItem.id} onClick={toggleFlipped}/>
            <button onClick={toggleAndCountLiked}>Love it!</button>
            <div>{isLikedCount} people love this!</div>
        </>
    )
} else {
    return (
        <>
        {galleryItem.description}
        {/* <button onClick={toggleAndCountLiked(galleryItem.id, galleryItem.likes)}>Love it!</button> */}
            <div>{isLikedCount} people love this!</div>
        </>
    )
}
}

export default GalleryItem;