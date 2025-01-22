import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/vi';

const modules = import.meta.glob('./en/**/*.{json,ts,js}', { eager: true });
export default {
  message: {
    ...genMessage(modules as Recordable<Recordable>, 'vi'),
    antdLocale,
  },
  dateLocale: null,
  dateLocaleName: 'vi',
};
