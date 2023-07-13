export interface ChildrenProp {
  children: React.ReactNode;
}

export interface StylingProp {
  className?: string;
  style?: React.CSSProperties;
}

export interface TextProp extends StylingProp {
  text: string;
}

export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
export type ContainerTag =
  | 'address'
  | 'article'
  | 'aside'
  | 'blockquote'
  | 'details'
  | 'dialog'
  | 'div'
  | 'fieldset'
  | 'figure'
  | 'footer'
  | 'form'
  | 'header'
  | 'hgroup'
  | 'li'
  | 'main'
  | 'menu'
  | 'nav'
  | 'section'
  | 'summary';
