import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleMetaDataBooleanLogin, toggleMetaDataBooleanSignUp } from "../store/switcher-slice";

export const useMetaData = () => {
    const dispatch = useAppDispatch()
    const switchMetadataHandlerLogin = useAppSelector((state) => state.ui.metaDataLoginTrigger)
    const switchMetadataHandlerSignUp = useAppSelector((state) => state.ui.metaDataSignUpTrigger)

    const toggleMetaDataLogin = () => {
        dispatch(toggleMetaDataBooleanLogin())
    }
    const toggleMetaDataSignUp = () => {
        dispatch(toggleMetaDataBooleanSignUp())
    }

    return {
        switchMetadataHandlerLogin,
        switchMetadataHandlerSignUp,
        toggleMetaDataLogin,
        toggleMetaDataSignUp
    }
}