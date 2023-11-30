export const ImageGalleryItem = props => {
  function handleClick() {
    props.onOpenModal(props.item.largeImageURL);
  }

  return (
    <li className="ImageGalleryItem" onClick={handleClick}>
      <img
        src={props.item.webformatURL}
        alt={props.item.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};
