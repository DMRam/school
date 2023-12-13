import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleBoolean } from "../store/switcher-slice";

export const useData = () => {
    const dispatch = useAppDispatch()
    const onOffGearIcon = useAppSelector((state) => state.ui.isVisible)

    const toggleGearIcon = () => {
        dispatch(toggleBoolean())
    }

    return {
        onOffGearIcon,
        toggleGearIcon
    }
}