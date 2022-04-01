export interface IActivityTab {
    img: string,
    description: string,
    title: string,
    event: 'Modified' | 'Listed' | 'Sold' | 'Delisted',
    cryptoPrice: number,
    dollarPrice: number,
    user: string,
    date: Date
}