import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleBoolean } from "../store/switcher-slice";

export const useData = () => {
    const dispatch = useAppDispatch()
    const onOffGearIcon = useAppSelector((state) => state.ui.isVisible)
    const userLogged = useAppSelector((state) => state.ui.userLogged)

    const toggleGearIcon = () => {
        dispatch(toggleBoolean())
    }

    return {
        onOffGearIcon,
        toggleGearIcon,
        userLogged
    }
}