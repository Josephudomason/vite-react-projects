import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface ImageItem {
  id: string;
  download_url: string;
}

interface ImageSliderProps {
  url: string;
  limit?: number;
  page?: number;
}

export default function ImageSlider({ url, limit = 5, page = 1 }: ImageSliderProps) {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchImages(getUrl: string): Promise<void> {
    try {
      setLoading(true);
      setErrorMsg(null);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data: ImageItem[] = await response.json();

      if (data && Array.isArray(data)) {
        setImages(data);
      } else {
        setErrorMsg("Invalid data format received");
      }
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  function handlePrevious(): void {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext(): void {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  function handleIndicatorClick(index: number): void {
    setCurrentSlide(index);
  }

  useEffect(() => {
    if (url !== '') {
      fetchImages(url);
    }
  }, [url, page, limit]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading data! Please wait</div>
      </div>
    );
  }

  if (errorMsg !== null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Error occurred! {errorMsg}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center text-amber-600 mt-5 mb-8">
        Image Slider App
      </h1>
      <div className="relative w-full max-w-2xl mx-auto">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer hover:text-gray-300 transition-colors z-10"
        />
        {images && images.length > 0 ? (
          <img
            key={images[currentSlide].id}
            alt={images[currentSlide].download_url}
            src={images[currentSlide].download_url}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        ) : (
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">No images available</span>
          </div>
        )}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer hover:text-gray-300 transition-colors z-10"
        />

        <div className="circle-indicators flex justify-center mt-4 space-x-2">
          {images && images.length > 0 ? (
            images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-amber-600" : "bg-gray-400"
                  }`}
              />
            ))
          ) : null}
        </div>
      </div>
    </div>
  );
}

