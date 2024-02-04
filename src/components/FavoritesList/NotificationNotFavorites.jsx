import { NotificationText, NotificationWrapper } from "./FavoritesList.styled";

export const Notification = ({ message }) => {
    return (
        <NotificationWrapper>
            <NotificationText>{message}</NotificationText>
        </NotificationWrapper>
    );
};
