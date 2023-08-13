export type Menu = {
  id: number;
  title: string;
  path?: string;
  href? : string;
  newTab: boolean;
  submenu?: Menu[] ;
};
