import isMobile from 'ismobilejs';

export const isMobileControl = {
  data() {
    return{
      isMobile,
      isMobileDeviceStatus: false,
    };
  },
  computed:{
    isMobileDevice() {
      return this.isMobileDeviceStatus;
    },
  },
  beforeMount() {
    this.isMobileDeviceStatus = isMobile(window.navigator).any;
  },
};