 

// In your types file
export interface Movie {
  id: string;
  title: string;
  posterColor: string;
  quality?: string;
  year?: string;
  genre?:string;
  rating?:string;
  description?:string;
  posterColorAlt?: string;
  progress?: number;
  duration?: string;
  posterImage?: any; // Add this for image support (use require or { uri: 'url' })
  subtitleTag?: string; // e.g. "Marvel"
}

export interface CategoryTab {
  id: string;
  label: string;
}

export interface MovieDetail {
  id: string;
  title: string;
  bannerColor: string;
  bannerColorAlt: string;
  quality: string;
  year: string;
  genre: string;
  duration: string;
  rating: string;
  description: string;
  related: Movie[];
}
