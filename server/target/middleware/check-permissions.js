export const isAuthenticated = ({ context }, next) => {
    if (!context.req.session.userId) {
        throw new Error("User not authenticated");
    }
    return next();
};
