import { UserInterface } from "../interfaces/UserInterface"
import { useAppDispatch } from "../store/hooks"
import { addUserLogged } from "../store/switcher-slice"

export const useHandleData = () => {

    const dispatch = useAppDispatch()

    const sendLoggedUser = (user: UserInterface) => {
        dispatch(addUserLogged(user))
    }

    return {
        sendLoggedUser
    }

}