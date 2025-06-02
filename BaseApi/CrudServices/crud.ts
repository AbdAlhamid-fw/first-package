import ApiService from "../api-service.ts";
import {ICustomEndpoints, IGetAllResponse, IResponse} from "./interfaces.ts";
import ApiOperationNames from "./api-operation-names.ts";
import {possibleIdValue} from "./helpers.ts";
import RequestConfig from "../request-config.ts";
import config from "../Config/index.ts";
import { IGetAllParamsBasic } from "../interfaces/index.ts";

export class CRUDService<
    // get all
    IGetAllParams = {},
    IGetAllItemData = {},
    // create
    ICreateRequset = {},   
    // update
    IUpdateRequest = {}, 
    // get details
    IGetDetailsResponse = {},
    IGetDetailsParams = {},
    // delete
    IDeleteParams = {}
> extends ApiService {
    customEndpoints: ICustomEndpoints | undefined = {
        createEndpoint: undefined,
        deleteEndpoint: undefined,
        getAllEndpoint: undefined,
        getEndpoint: undefined,
        updateEndpoint: undefined,
    };

    constructor(
        serviceName: string,
        customEndpoints?: ICustomEndpoints,
        extraConfig?: RequestConfig
    ) {

        console.log("extraConfig",extraConfig);
        console.log("config",config);
        
        super({
            baseURL: `${ "enter-your-base-url" }/${serviceName}`,
            ...extraConfig,
            headers: {...config.headers, ...extraConfig?.headers},

        });
        this.customEndpoints = customEndpoints;
    }

  /* @tags  */
  /* @name GetAll */
  /* @request GET:/baseURL/endpoint/Get?params */
  public getAll = (
    params?: IGetAllParams & IGetAllParamsBasic,
    config?: any
  ): Promise<IGetAllResponse<IGetAllItemData>> => {
    let newParams = {
      ...params,
      query: params?.query ? JSON.stringify(params?.query) : {},
    };   

    return this.get(
      this.customEndpoints?.getAllEndpoint ?? ApiOperationNames.GET,
      {
        params: newParams,
        ...config,
      }
    );
  };
      


    //       /* @tags  */
    // /* @name Get */
    // /* @request GET:/baseURL/endpoint/Get/id?params */
    // public getDetails = (
    //   params: IGetDetailsParams & { id: number | string }
    // ): Promise<IResponse<IGetDetailsResponse>> => {
    //   return this.get(
    //     `${this.customEndpoints?.getEndpoint ?? ApiOperationNames.GET}/${
    //       params.id
    //     }`
    //   );
    // };


    /* @tags  */
    /* @name Get */
    /* @request GET:/baseURL/endpoint/Get/id?params */
    public getDetails = (
        params: IGetDetailsParams & { id: number | string },
        //@ts-ignore
        config?: any
    ): Promise<IResponse<IGetDetailsResponse>> => {
        const {id, ...rest} = params;
        return this.get(
            `${this.customEndpoints?.getEndpoint ?? ApiOperationNames.GET}${
                !!id ? `/${id}` : ""
            }`, {
                params: rest
            }
        );
    };

    /* @tags  */
    /* @name Create */
    /* @request POST:/baseURL/endpoint/Create */
    public create = (body: ICreateRequset): Promise<IResponse<any>> => {
        // console.log(body, "body");

        return this.post(
            this.customEndpoints?.createEndpoint ?? ApiOperationNames.CREATE,
            body
            // {
            // TODO: I replaced ...body
            //   ...body,
            // }
        );
    };

    /* @tags  */
    /* @name Update */
    /* @request PUT:/baseURL/endpoint/Update */
    public update = (
        body: IUpdateRequest & { id?: number | string }
    ): Promise<IResponse<any>> => {
        let id = possibleIdValue(body)
        let updateURL = id === "" ? "" : `/${id}`
        return this.put(
            `${
                this.customEndpoints?.updateEndpoint ?? ApiOperationNames.UPDATE
            }${updateURL}`,
            body
        );
    };

    /* @tags  */
    /* @name delete */
    /* @request GET:/baseURL/endpoint/delete/id?params */
    public deleteItem = (
        params: IDeleteParams & { id: number | string }
    ): Promise<IResponse<any>> => {
        return this.delete(
            `${this.customEndpoints?.deleteEndpoint ?? ApiOperationNames.DELETE}${!!params.id ? `/${params.id}` : ""}`
        );
    };

    // delete All Item
    public deleteAllItem = (body: any): Promise<IResponse<any>> => {
        //  console.log("body in deleteAllItem",body);

        return this.delete(
            `${this.customEndpoints?.deleteEndpoint ?? ApiOperationNames.DELETE}`,
            // check this body => {data:body}
            {data:body}
        );
    };

    /* @tags  */
    /* @name patch */
    /* @request PUT:/baseURL/endpoint/Update */
    public patchItem = (
        body: IUpdateRequest & { id: number | string }
    ): Promise<IResponse<any>> => {


        return this.patch(
            `${
                this.customEndpoints?.updateEndpoint ?? ApiOperationNames.PATCH
            }${possibleIdValue(body)}`,
            body
        );
    };

    public patchAll = (
        body: IUpdateRequest & { id?: string | number | undefined; },
        //@ts-ignore
        config?: any
    ): Promise<IResponse<any>> => {

        return this.patch(
            `${
                this.customEndpoints?.updateEndpoint ?? ApiOperationNames.PATCH
            }`,
            body
        );
    };
}
