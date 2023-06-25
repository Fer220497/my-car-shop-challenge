export interface ICar {
    id: number,
    model: string,
    authorisedDealer: string,
    numberDoor: number,
    price: number,
    fuelType: string
    img: string
}
export interface ICarProps {
    carList: ICar[];
    filterList: (value: string) => void;
}
export interface IDialogFormProps {
    handleSubmitForm: (item: any) => void;
}
export interface IDialogData {
    car: ICar;
}