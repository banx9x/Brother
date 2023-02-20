import React from "react";
import { useParams } from "react-router";
import gameService from "../../features/game/game.service";

const GameDetail = () => {
    const { id } = useParams();

    const {
        data = {},
        isLoading,
        isError,
        error,
    } = gameService.useGetGameDetailQuery(id);

    return <div>GameDetail</div>;
};

export default GameDetail;
