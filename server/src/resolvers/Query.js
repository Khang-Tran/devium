import { getUserId } from '../utils/authUtils';

const Query = {
    getUsers(parent, args, { prisma }, info) {
        const opArgs = {
            first: args.first,
            skip: args.skip,
            after: args.after
        };

        if (args.query) {
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                }]
            };
        }

        return prisma.query.users(opArgs, info);
    },

    currentUser(parent, args, { prisma, request }, info) {
        const userId = getUserId(request);

        return prisma.query.user({
            where: {
                id: userId
            }
        });
    }
};

export default Query;
