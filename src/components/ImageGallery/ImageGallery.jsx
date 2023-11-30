import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { GalleryWrap } from './ImageGallery.styled';

export const ImageGallery = props => {
  return (
    <GalleryWrap>
      {props.items.map(item => (
        <ImageGalleryItem
          item={item}
          key={item.id}
          onOpenModal={props.onOpenModal}
        />
      ))}
    </GalleryWrap>
  );
};
