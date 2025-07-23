"use client"
import { useState, useRef, RefObject } from "react";
import styles from "./Home.module.css";
import Image from "next/image";

type ImageRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type CustomStyle = React.CSSProperties & {
  '--initial-top'?: string;
  '--initial-left'?: string;
  '--initial-width'?: string;
  '--initial-height'?: string;
};

export default function Home() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [clickedImageRect, setClickedImageRect] = useState<ImageRect | null>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  
  // Create non-null refs for each image
  const photo1Ref = useRef<HTMLDivElement>(null);
  const photo2Ref = useRef<HTMLDivElement>(null);
  const photo3Ref = useRef<HTMLDivElement>(null);
  const photo4Ref = useRef<HTMLDivElement>(null);
  const photo5Ref = useRef<HTMLDivElement>(null);
  const photo6Ref = useRef<HTMLDivElement>(null);
  const photo7Ref = useRef<HTMLDivElement>(null);
  const photo8Ref = useRef<HTMLDivElement>(null);

  const handleImageClick = (src: string, ref: RefObject<HTMLDivElement>) => {
    const element = ref.current;
    const screenElement = screenRef.current;
    if (!element || !screenElement) return;
    
    const elementRect = element.getBoundingClientRect();
    const screenRect = screenElement.getBoundingClientRect();
    
    // Calculate positions relative to the screen container
    setClickedImageRect({
      top: elementRect.top - screenRect.top,
      left: elementRect.left - screenRect.left,
      width: elementRect.width,
      height: elementRect.height
    });
    setFullscreenImage(src);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const containerStyle: CustomStyle = {
    '--initial-top': `${clickedImageRect?.top}px`,
    '--initial-left': `${clickedImageRect?.left}px`,
    '--initial-width': `${clickedImageRect?.width}px`,
    '--initial-height': `${clickedImageRect?.height}px`
  };

  return (
    <div className={styles.screen} ref={screenRef}>
      {/* Photo 1 */}
      <div 
        className={styles.photo1} 
        ref={photo1Ref}
        onClick={() => handleImageClick("/photo-1.jpg", photo1Ref as RefObject<HTMLDivElement>)}
      >
        <Image src="/photo-1.jpg" alt="" height={398.44} width={600} quality={100} />
      </div>

      {/* Photo 5 */}
      <div 
        className={styles.photo5}
        ref={photo5Ref}
        onClick={() => handleImageClick("/photo-5.jpg", photo5Ref as RefObject<HTMLDivElement>)}
      >
        <Image src="/photo-5.jpg" alt="" height={187.5} width={250} quality={100} />
      </div>

      {/* Photo 2 */}
      <div 
        className={styles.photo2} 
        ref={photo2Ref}
        onClick={() => handleImageClick("/photo-2.jpg", photo2Ref as RefObject<HTMLDivElement>)}
      >
        <Image src="/photo-2.jpg" alt="" height={509.09} width={340} quality={100} />
      </div>

      {/* Photo 7 */}
      <div 
        className={styles.photo7}
        ref={photo7Ref}
        onClick={() => handleImageClick("/photo-7.jpg", photo7Ref as RefObject<HTMLDivElement>)}
      >
        <Image src="/photo-7.jpg" alt="" height={312.13} width={250} quality={100} />
      </div>

      {/* Photo 4 */}
      <div 
        className={styles.photo4} 
        ref={photo4Ref}
        onClick={() => handleImageClick("/photo-4.jpg", photo4Ref as RefObject<HTMLDivElement>)}
      >
        <Image src="/photo-4.jpg" alt="" height={400} width={600} quality={100} />
      </div>

      {/* Photo 3 */}
      <div 
        className={styles.photo3} 
        ref={photo3Ref}
        onClick={() => handleImageClick("/photo-3.jpg", photo3Ref as RefObject<HTMLDivElement>)}
      >
        <Image src="/photo-3.jpg" alt="" height={545.53} width={350} quality={100} />
      </div>

      {/* Photo 6 */}
      <div 
        className={styles.photo6}
        ref={photo6Ref}
        onClick={() => handleImageClick("/photo-6.png", photo6Ref as RefObject<HTMLDivElement>)}
      >
        <Image src="/photo-6.png" alt="" height={255.38} width={240} quality={100} />
      </div>

      {/* Photo 8 */}
      <div 
        className={styles.photo8}
        ref={photo8Ref}
        onClick={() => handleImageClick("/photo-8.png", photo8Ref as RefObject<HTMLDivElement>)}
      >
        <Image src="/photo-8.png" alt="" height={270.63} width={240} quality={100} />
      </div>

      {fullscreenImage && (
        <div className={styles.fullscreenOverlay} onClick={closeFullscreen}>
          <div 
            className={styles.fullscreenImageContainer}
            style={containerStyle}
          >
            <Image 
              src={fullscreenImage} 
              alt="" 
              fill
              style={{ objectFit: "contain" }}
              quality={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}