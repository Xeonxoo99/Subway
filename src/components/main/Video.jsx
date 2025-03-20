import video from "@assets/main/video/main_video.mp4"

function Video(){
    return(
        <div className="w-full overflow-hidden">
            <video className="w-screen" src={video} autoPlay muted loop></video>
        </div>
    )
}

export default Video;