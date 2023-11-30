import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { AppDiv } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'api/pixabay';
import { Button } from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export const App = () => {
  const [items, setItems] = useState([]);
  const [querry, setQuerry] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLoad, setShowLoad] = useState(false);

  const searchService = async () => {
    setShowLoad(true);
    setShowBtn(false);

    const q = querry;

    try {
      const imags = await fetchImages({ q });
      setItems(imags.hits);
      setShowBtn(imags.hits.length >= 15);
    } catch (err) {
      console.log(err);
    } finally {
      setShowLoad(false);
    }
  };

  const handleSearch = e => {
    e.preventDefault();

    const q = e.target.elements.input.value;

    setQuerry(q);
    setPage(1);
  };

  const loadMoreService = async () => {
    setShowLoad(true);
    setShowBtn(false);

    try {
      const imags = await fetchImages({
        q: querry,
        page: page,
      });
      setItems(prev => [...prev, ...imags.hits]);
      setShowBtn(imags.hits.length >= 15);
    } catch (err) {
      console.log('Error in loadMoreService:', err);
    } finally {
      setShowLoad(false);
    }
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleOpenModal = imageUrl => {
    setShowModal(true);
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  useEffect(() => {
    if (querry && page === 1) searchService();
  }, [querry, page]);

  useEffect(() => {
    if (page !== 1) loadMoreService();
  }, [page]);

  return (
    <AppDiv>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery items={items} onOpenModal={handleOpenModal} />
      {showLoad && <Loader />}
      {showBtn && <Button onClick={handleLoadMore} />}
      {showModal && (
        <Modal imageUrl={selectedImage} onClose={handleCloseModal} />
      )}
    </AppDiv>
  );
};
