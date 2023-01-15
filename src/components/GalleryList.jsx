import GalleryItem from "./GalleryItem";
import galleryItem from "./GalleryItem";

function GalleryList({ galleryList }) {
        return (
            <>
                {galleryList.map((galleryItem) => {
                    return (
                        <GalleryItem galleryItem={galleryItem} key={galleryItem.id}/>
                        )
                    })
                }
            </>
        )
}

export default GalleryList;