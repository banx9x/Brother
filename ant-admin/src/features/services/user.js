import baseService from "./base";

const userService = baseService.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => "users",
        }),
    }),
});

export default userService;
