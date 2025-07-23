"use client"
import Page from "../Page/Page";
import HTMLFlipBook from "react-pageflip";

type Page = {
  text: string;
  page: number;
  chapter?: string;
  title?: string;
};

interface BookProps {
  pages: Page[];
}

const Book: React.FC<BookProps> = ({ pages }) => {
  return (
    <HTMLFlipBook
      size="fixed"
      width={600}
      height={900}
      minWidth={600}
      maxWidth={600}
      minHeight={900}
      maxHeight={900}
      maxShadowOpacity={0.5}
      showCover={false}
      mobileScrollSupport={true}
      className="my-flip-book"
      style={{ backgroundColor: '#f5f5f5' }}
      startPage={0}
      disableFlipByClick={false}
      usePortrait={true}
      startZIndex={0}
      autoSize={true}
      clickEventForward={false}
      useMouseEvents={true}
      swipeDistance={30}
      showPageCorners={true}
      flippingTime={1000}
      drawShadow={true}
      onFlip={(e) => console.log('Current page:', e.data)}
    >
      {pages.map((page, index) => (
        <Page 
          key={index}
          text={page.text}
          page={page.page}
          chapter={page.chapter}
          title={page.title}
        />
      ))}
    </HTMLFlipBook>
  );
}

export default Book;