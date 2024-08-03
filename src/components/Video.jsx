import React, { useRef, useEffect } from 'react'

const Video = ({ src, type }) => {
    const videoref = useRef(null);

    useEffect(() => {
        const videoElement = videoref.current;

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                videoElement.play();
              } else {
                // videoElement.pause();
              }
            });
          };

        const observer = new IntersectionObserver(handleIntersection,{
            threshold: 0.25,
        })

        observer.observe(videoElement);

        return () => {
            observer.unobserve(videoElement);
        };
    },[]);

    return (
        <video ref={videoref}  width="100%" muted loop>
            <source src={src} type={type}/>
            Your browser does not support the video tag.
        </video>
    )
}

export default Video