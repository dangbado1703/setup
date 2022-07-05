import { IFormDataAbout } from '../formvalue/formDataAbout';

export interface IFormPropsAbout {
  show: {
    workIn: boolean;
    oldSchool: boolean;
    liveIn: boolean;
    from: boolean;
    heart: boolean;
    phone: boolean;
  };
  setShow: React.Dispatch<
    React.SetStateAction<{
      workIn: boolean;
      oldSchool: boolean;
      liveIn: boolean;
      from: boolean;
      heart: boolean;
      phone: boolean;
    }>
  >;
  dataInfo: IFormDataAbout[];
  setDataInfo: React.Dispatch<React.SetStateAction<IFormDataAbout[]>>;
  id: number;
}
