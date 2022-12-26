import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillInstagram
  } from "react-icons/ai";

export default function AlertDialog({open=false,handleClickOpen=f=>f,handleClose=f=>f}) {

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{  }} className='bg-gray-100'
>
          {"Ways to reach out"}
        </DialogTitle>
        <DialogContent 
        className='bg-gray-100'
        >
        <div className='mt-4 py-4 px-2 rounded-md shadow-md  bg-white'>
        <h2 >Socials</h2>
          <div id="connect" className="text-5xl flex justify-center gap-10 py-3 mt-1 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle className='text-violet-800' />
              <AiFillInstagram className='text-violet-800'/>
              <AiFillYoutube className='text-violet-800'/>
          </div>
        </div>
          
          <h2 className='mt-4 py-4 px-2 rounded-md shadow-md  bg-white'>Or feel free to <a className='text-blue-700' href='mailto: singhprabhjit5290@gmail.com'>send an email.</a></h2>


        </DialogContent>
        <DialogActions className='bg-gray-100'>
          <Button onClick={handleClose} id="close" className=" bg-violet-300 p-2.5 text-gray-800" >Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}