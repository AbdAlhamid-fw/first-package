export const possibleIdValue = (record: any) => {
    return record.unique_id ?? record.id ?? record.key ?? "";
};
