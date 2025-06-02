export {CRUDService,ApiProvider,readCookies} from  "./BaseApi/index.ts"

export const  isUser = (user:any) => {
  if (user) {
    return true;
  } else {
    return false;
  }
}
