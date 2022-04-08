export interface IUploadCard {
    username: string,
    code: string,
    token: string,
    event: 'Listed' | 'Modified' | 'Delisted' | 'Sold',
    price: number,
    date: Date
}