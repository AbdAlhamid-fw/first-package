export interface ICustomEndpoints {
    createEndpoint?: string | undefined;
    updateEndpoint?: string | undefined;
    deleteEndpoint?: string | undefined;
    getEndpoint?: string | undefined;
    getAllEndpoint?: string | undefined;
}

interface IMeta {
    success?: boolean;
    status?: any;
    message?: string | any;
}

export interface IResponse<IData> {
    data?: IData;
    meta?: IMeta;
}

export interface IGetAllResponse<IData> extends IResponse<any> {
    data: {
        items?: IData[];
        total?: number;
        total_pages?: number;
        [key: string]: any
    };

    [key: string]: any
}


export interface IGetOption {
    label: string,
    value: any
}

export interface IGetAllOptions extends IGetAllResponse<IGetOption> {
}
