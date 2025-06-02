export type paramasQueryItemType =
    | "exact"
    // | "iexact"
    // | "contains"
    | "icontains"
    // | "in"
    // | "gt"
    // | "gte"
    // | "lt"
    // | "lte"
    // | "startswith"
    // | "istartswith"
    // | "endswith"
    // | "iendswith"
    | "range"
    | "date"
// | "year"
// | "iso_year"
// | "month"
// | "day"
// | "week"
// | "week_day"
// | "iso_week_day"
// | "quarter"
// | "time"
// | "hour"
// | "minute"
// | "second"
// | "isnull"
// | "regex"
// | "iregex";

export interface IParamasQueryItem {
    name?: string;
    value?: any;
    lookup?: paramasQueryItemType;
}



export interface IParamasQuery {
    and?: IParamasQueryItem[];
    or?: IParamasQueryItem[];
    order_by?: any;
}

export interface IGetAllParamsBasic {
    num_item_in_page?: any;
    search?: any;
    date?: any;
    page?: number;
    fields?: any;
    order_by?: string;
    query?: IParamasQuery;
}