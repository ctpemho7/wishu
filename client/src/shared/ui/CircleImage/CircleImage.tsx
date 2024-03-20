import styles from './circle-image.module.scss'

interface CircleImageProps {
    url: string
}
const CircleImage = ({ url }: CircleImageProps) => {
    return (
        <div className={styles['circle-image']}>
            <img src={url} alt="Circle" />
        </div>
    );
};

export default CircleImage;