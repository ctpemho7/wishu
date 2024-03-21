import { Add } from '@mui/icons-material';
import { Card, IconButton } from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';

import styles from './image-unput.module.scss'

const ImageInput = () => {

    const fileInputRef = useRef<HTMLInputElement>(null)
    const [photo, setPhoto] = useState<string | null>(null)

    const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const uploadedPhoto = event.target.files && event.target.files[0]
        if (uploadedPhoto)
            setPhoto(URL.createObjectURL(uploadedPhoto))
    };

    const handleClick = () => {
        if (fileInputRef.current)
            fileInputRef.current.click()
    };

    return (
        <>
            <Card
                className={`${styles['image-unput']} ${photo && styles['with-photo']}`}>
                {photo ? (
                    <img src={photo} alt="Uploaded" className={styles['image-preview']} />
                ) : (
                    <IconButton className={styles['upload-button']} onClick={handleClick}>
                        <Add />
                    </IconButton>
                )}
            </Card>
            <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhotoUpload} />
        </>

    );
};

export default ImageInput;