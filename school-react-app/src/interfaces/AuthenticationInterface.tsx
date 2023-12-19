export interface AuthenticationInterface {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    navigate: Function; // Change to the appropriate type if possible
    toggleGearIcon: Function; // Change to the appropriate type if possible
    sendLoggedUser: Function; // Change to the appropriate type if possible
}