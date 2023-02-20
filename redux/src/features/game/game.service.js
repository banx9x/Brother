import baseService from "../root/service";

const gameService = baseService.injectEndpoints({
    endpoints: (build) => ({
        getGameList: build.query({
            query: () => "games",
        }),
        getGameDetail: build.query({
            query: (id) => `game?id=${id}`,
        }),
    }),
});

export default gameService;
