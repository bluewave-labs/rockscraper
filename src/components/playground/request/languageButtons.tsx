'use client';
import { CodeByLanguage } from '@src/utils/interfaces';
import languages from '@src/utils/requests';
import { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '../../ui/carousel';

const LanguageButtons = ({
  activeLanguage,
  setActiveLanguage,
  setSelectedCode,
}: {
  activeLanguage: string;
  setActiveLanguage: (language: string) => void;
  setSelectedCode: (val: CodeByLanguage) => void;
}) => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const index = api.selectedScrollSnap();
      setActiveLanguage(languages[index].language);
      setSelectedCode(languages[index]);
    };
    api.on('select', handleSelect);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const index = languages.findIndex(({ language }) => language === activeLanguage);
    if (index !== -1) {
      api.scrollTo(index);
    }
  }, [activeLanguage]);

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: false,
        slidesToScroll: 1,
      }}
      setApi={setApi}
    >
      {api?.canScrollPrev() && <CarouselPrevious />}
      <CarouselContent className="py-2">
        {languages.map(({ language }, i) => (
          <CarouselItem key={language} className="w-auto">
            <Button
              variant={activeLanguage === language ? 'outline_active' : 'outline'}
              size="sm"
              onClick={() => {
                setActiveLanguage(language);
                setSelectedCode(languages[i]);
              }}
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
