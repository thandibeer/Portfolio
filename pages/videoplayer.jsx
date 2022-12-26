import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoPlayer = ({url="",style}) => {
    return (     <ReactPlayer className="basis-1/3 flex-1 " url={url} style={style} />
    );
}
 
export default VideoPlayer;