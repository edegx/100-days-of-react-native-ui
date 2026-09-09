export interface FriendStory {
  id: string;
  name: string;
  thumbnailUri: string;
  ringColor: string;
}

export interface DiscoverStory {
  id: string;
  title: string;
  thumbnailUri: string;
  hasStarBadge?: boolean;
  flagEmoji?: string;
}

export interface FeaturedStory {
  id: string;
  caption?: string;
  overlayText?: string;
  thumbnailUri: string;
  isMultiSnap?: boolean;
  aspectRatio?: number;
}
