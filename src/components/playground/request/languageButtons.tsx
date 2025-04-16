'use client';
import { CodeByLanguage } from '@src/utils/interfaces';
import languages from '@src/utils/requests';
import { useEffect, useState } from 'react';
import { Button, useIsMobile } from '@bluewavelabs/prism-ui';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '../../ui/carousel';
import { cn } from '@src/lib/utils';

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
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      const index = api.selectedScrollSnap();
      setActiveLanguage(languages[index].language);
      setSelectedCode(languages[index]);
    });
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
          <CarouselItem key={language} className={cn("w-auto", i !== 0 && activeLanguage !== language ? 'pl-0' : '')}>
            <Button
              variant={activeLanguage === language ? 'outline_active' : 'outline'}
              size={isMobile ? 'xs' : 'sm'}
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
