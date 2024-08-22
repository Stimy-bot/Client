import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { app } from '../Firebase/firebase';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Button from '../ReusableComponents/Button';
import { images } from '../../constants';

import type { RootState } from '../../store';

interface RootState {
  userInfo: string;
  profilePicture: string;
}

const FirebaseImageUpload: React.FC = () => {
  const fileRef = useRef('');
  const [profilePicture, setProfilePicture] = useState<File | undefined>(undefined);
  const [profilePicturePerc, setProfilePicturePerc] = useState<number>(0);
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});

  const userInfo = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    profilePicture && uploadFile(profilePicture, 'imgUrl');
  }, [profilePicture]);

  const uploadFile = (file: File, fileType: string) => {
    const storage = getStorage(app);
    const folder = fileType === 'imgUrl' ? 'images/' : 'videos/';
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === 'imgUrl';
        setProfilePicturePerc(Math.round(progress));
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            console.log(error);
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('DownloadURL - ', downloadURL);
          setInputs((prev) => {
            return {
              ...prev,
              [fileType]: downloadURL
            };
          });
        });
      }
    );
  };

  const changeProfilePic = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      await axios.put(`http://localhost:5000/users/profile`, { ...inputs });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <form onSubmit={changeProfilePic} className="flex flex-col">
        <div className="">
          <span>{profilePicturePerc > 0 && 'Uploading: ' + profilePicturePerc + '%'}</span>
          <br />
          <input hidden type="file" accept="image/*" ref={fileRef} id="profilePicture" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setProfilePicture(event.target.files?.[0])} />
        </div>
        <img
          src={userInfo.profilePicture || images.profile}
          defaultValue={userInfo.profilePicture}
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover content-center"
          id="profilePicture"
          onClick={() => fileRef.current?.click()}
          alt=""
        />

        <br />
        <Button className="w-40" type="submit">
          Change Picture
        </Button>
      </form>
    </div>
  );
};

export default FirebaseImageUpload;