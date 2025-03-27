"use client";
import languages from "@src/utils/requests";
import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../../ui/carousel";

const LanguageButtons = ({
  activeLanguage,
  setActiveLanguage,
}: {
  activeLanguage: string;
  setActiveLanguage: (language: string) => void;
}) => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      const index = api.selectedScrollSnap();
      setActiveLanguage(languages[index].language);
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
        slidesToScroll: 1,
      }}
      setApi={setApi}
    >
      {api?.canScrollPrev() && <CarouselPrevious />}
      <CarouselContent className="py-2">
        {languages.map(({ language }) => (
          <CarouselItem key={language} className='w-auto'>
            <Button
              variant={
                activeLanguage === language ? "outline_active" : "outline"
              }
              size='sm'
              onClick={() => setActiveLanguage(language)}
            >
              {language}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      {api && api.canScrollNext() && <CarouselNext />}
    </Carousel>
  );
};

export default LanguageButtons;
