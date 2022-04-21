export class IUploadCard {
    id?: number
    username?: string;
    token?: string;
    event?: 'Listed' | 'Modified' | 'Delisted' | 'Sold';
    price?: number;
    date?: Date
}