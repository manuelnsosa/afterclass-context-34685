import { React, useState, useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AddToCart = ({ fn, message, btnContent, count, setCount, plant }) => {
  const [open, setOpen] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className='flex ml-5 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'
        onClick={handleClickOpen}
      >
        {btnContent}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{message}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to add this item to your cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button
            onClick={() => {
              handleClose();
              addToCart({ ...plant, count });
              setCount(1);
            }}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddToCart;

//addToCart({ ...plant, quantity: count });
