// TODO: readCookies;
// import { readCookies } from '../../utils/cookies';
import ApiProvider from "./api-provider.ts";
import HttpMethod from "./http-method.ts";
import RequestConfig from "./request-config.ts";

export default class ApiService {
    private provider: ApiProvider;

    constructor(config: RequestConfig) {
        this.provider = new ApiProvider({
            ...config,
            // headers: {
            //     ...config.headers,
            //     Authorization:
            //         config?.headers?.Authorization ??
            //         // `Bearer ${readCookies().KEY_TOKEN}` ??
            //         "",
            // },
        });
    }

    protected get<T>(url: string, config?: RequestConfig): Promise<T> {
        const method = HttpMethod.GET;
        return this.provider
            .request({
                method,
                url,
                ...{
                    ...config,
                    // headers: {
                    //     ...config?.headers,
                    //     Authorization:
                    //         config?.headers?.Authorization ??
                    //         // TODO:
                    //         // `Bearer ${readCookies().KEY_TOKEN}` ??
                    //         "",
                    // },
                },
            })
    }

    protected delete<T>(url: string, config?: RequestConfig): Promise<T> {
        const method = HttpMethod.DELETE;
        return this.provider.request({
            method,
            url,
            ...{
                ...config,
                // headers: {
                //     ...config?.headers,
                //     Authorization:
                //         config?.headers?.Authorization ??
                //         // TODO: commit
                //         // `Bearer ${readCookies().KEY_TOKEN}` ??
                //         "",
                // },
            },
        });
    }

    protected post<T>(
        url: string,
        data?: any,
        config?: RequestConfig
    ): Promise<T> {
        const method = HttpMethod.POST;
        return this.provider.request({
            method,
            url,
            data,
            ...{
                ...config,
                // headers: {
                //     ...config?.headers,
                //     Authorization:
                //         config?.headers?.Authorization ??
                //         // `Bearer ${readCookies().KEY_TOKEN}` ??
                //         "",
                // },
            },
        });
    }

    protected put<T>(
        url: string,
        data?: any,
        config?: RequestConfig
    ): Promise<T> {
        const method = HttpMethod.PUT;
        return this.provider.request({
            method,
            url,
            data,
            ...{
                ...config,
                // headers: {
                //     ...config?.headers,
                //     Authorization:
                //         config?.headers?.Authorization ??
                //         // `Bearer ${readCookies().KEY_TOKEN}` ??
                //         "",
                // },
            },
        });
    }

    protected patch<T>(
        url: string,
        data?: any,
        config?: RequestConfig
    ): Promise<T> {
        const method = HttpMethod.PATCH;
        return this.provider.request({
            method,
            url,
            data,
            ...{
                ...config,
                // headers: {
                //     ...config?.headers,
                //     Authorization:
                //         config?.headers?.Authorization ??
                //         // `Bearer ${readCookies().KEY_TOKEN}` ??
                //         "",
                // },
            },
        });
    }
}
