import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IFormDataAbout {
  id: number;
  icon: IconDefinition;
  name: string;
  hightLight: string;
  edit?: undefined | string;
  delete?: undefined | string;
}
