interface Imenu {
  id: number;
  name: string;
  description?: string;
  link: string;
  position?: number;
  subMenu?: Imenu[];
}
