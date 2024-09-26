export enum LCK {
    RECENT_VISIT = 'RECENT_VISIT_',
    PROJECT_BADGE = 'PROJECT_BADGE',
    PRODUCT_ADD='PRODUCT_ADD'
  }

  export const setRecentVist = (uid: string, value: string) => {
    try {
      localStorage.setItem(LCK.RECENT_VISIT + uid, value)
    } catch (error) {
      console.log(error)
    }
  }
  
  export const getRecentVisit = (uid: string) => {
    try {
      let value = localStorage.getItem(LCK.RECENT_VISIT + uid)
      localStorage.removeItem(LCK.RECENT_VISIT);
      return value;
    } catch (error) {
      return null
    }
  }
  
  export const setCartAffterLogin = ( value: string) => {
    try {
      localStorage.setItem(LCK.PRODUCT_ADD , value)
    } catch (error) {
      console.log(error)
    }
  }

  export const getCartAffterLogin = (uid: string) => {
    try {
      let value = localStorage.getItem(LCK.PRODUCT_ADD) as string;
      localStorage.removeItem(LCK.PRODUCT_ADD);
      return JSON.parse(value);
    } catch (error) {
      return null
    }
  }