export type IBurger = {
    open: boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    onClick():void,
};