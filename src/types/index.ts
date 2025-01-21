export interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  className?: string;
  backgroundClass?: string;
  onButtonClick?: () => void;
}
