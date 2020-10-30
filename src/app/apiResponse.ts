export interface ApiResponse{
    Status: string,
    StatusCode: number,
    Message: string,
    Data: any,
    Error: Error;
}