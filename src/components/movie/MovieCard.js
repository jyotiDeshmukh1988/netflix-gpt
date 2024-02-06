import React from 'react'
import { IMG_CDN_URL } from '../../utils/constants'
import Modal from '../Modal';

const MovieCard = ({posterPath,title,desc}) => {
  const [open, setOpen] = React.useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };
    if(!posterPath) return;
  return (
    <>
    <div className="w-48 md:w-55 pr-6 cursor-pointer"><img onClick={handleOpen} className="rounded-lg" alt="Movie Card" src={IMG_CDN_URL+posterPath}/></div>
    <Modal isOpen={open} onClose={handleClose}><h1 className='text-2xl font-bold mb-2 text-center'>{title}</h1><img className="rounded-lg" alt="Movie Card" src={IMG_CDN_URL+posterPath}/><p className='mt-2 text-sm'>{desc}</p></Modal>
    </>
  )
}

export default MovieCard;