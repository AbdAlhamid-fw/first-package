import {CRUDService,ApiProvider,readCookies} from "../index.ts"
import {isUser} from  "base-api-package"

var isUser_ = isUser({firstName:"John",lastName:"Doe"})
const user = new CRUDService("Users")
console.log("is user ? ===> ", isUser_);
console.log("user  ", user );
