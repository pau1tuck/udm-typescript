export const authChecker = ({ context }, roles) => {
    if (roles.length === 0) {
        return context.req.session.userId !== undefined;
    }
    if (!context.req.session.userId) {
        return false;
    }
    if (context.req.session.roles?.some((role) => roles.includes(role))) {
        return true;
    }
    return false;
};
