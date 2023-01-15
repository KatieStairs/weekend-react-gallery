import galleryItem from './GalleryList'
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

    const updateLiked = () => {
        axios({
            method: 'POST',
            url: '/gallery',
            data: {
            likes: {isLikedCount}
            }
        }).then((response) => {
            console.log('put res', response)
        }).catch((error) => {
            console.log('updateLiked error:', error);
        })
    }
    
    
    if (isFlipped === false) {
    return (
        <>
            <img src={ galleryItem.path} key={galleryItem.id} onClick={toggleFlipped}/>
            <button onClick={toggleAndCountLiked}>Love it!</button>
            <div>{isLikedCount} people love this!</div>
        </>
    )
} else {
    return (
        <>
        {galleryItem.description}
        </>
    )
}
}

export default GalleryItem;