export type SocialProvider = 'google' | 'apple' | 'guest';

export interface SocialButtonConfig {
  provider: SocialProvider;
  label: string;
}
