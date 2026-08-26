import React from 'react';
import { ScrollView } from 'react-native';
import Screen from '@/components/common/Screen';
import DetailBanner from '@/components/detail/DetailBanner';
import DetailInfo from '@/components/detail/DetailInfo';
import PlayButton from '@/components/detail/PlayButton';
import ExpandableDescription from '@/components/detail/ExpandableDescription';
import ActionRow from '@/components/detail/ActionRow';
import RelatedSection from '@/components/detail/RelatedSection';
import { movieDetail } from '@/data/movies';

export default function Detail() {
  return (
    <Screen edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DetailBanner
          bannerColor={movieDetail.bannerColor}
          bannerColorAlt={movieDetail.bannerColorAlt}
        />
        <DetailInfo
          title={movieDetail.title}
          quality={movieDetail.quality}
          year={movieDetail.year}
          genre={movieDetail.genre}
          duration={movieDetail.duration}
          rating={movieDetail.rating}
        />
        <PlayButton label="Play Free Now" />
        <ExpandableDescription text={movieDetail.description} />
        <ActionRow />
        <RelatedSection movies={movieDetail.related} />
      </ScrollView>
    </Screen>
  );
}
