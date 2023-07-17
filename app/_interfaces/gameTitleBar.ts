export interface GameTitleBarProps {
  title: string;
  onViewAllClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onLeftArrowClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onRightArrowClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
